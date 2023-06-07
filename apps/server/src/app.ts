import express from 'express';

const PORT = process.env.PORT ?? 8080;
const KEEP_ALIVE_TIMEOUT = Number(process.env.KEEP_ALIVE_TIMEOUT) || 65000;
let isShuttingDown = false;

const app = express();

app.use((_, res, next) => {
  const { send } = res;

  res.send = (body) => {
    if (isShuttingDown) {
      res.shouldKeepAlive = false;
    }

    return send.call(res, body);
  };

  next();
});

app.get('/health', (_, res) => {
  res.type('text/plain');
  res.send('OK');
});

const server = app.listen(PORT, () => {
  console.log(
    `\n\nProcess pid: ${process.pid}\nServer is running on port ${PORT}\n\n`
  );
});
server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;

const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`\n\nProcess received a ${signal} signal\n\n`);

    if (isShuttingDown) {
      return;
    }

    isShuttingDown = true;

    server.close((err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      process.exit(0);
    });
  });
});
