import type { Response } from 'express';
import express from 'express';

const PORT = process.env.PORT ?? 8080;
const KEEP_ALIVE_TIMEOUT = Number(process.env.KEEP_ALIVE_TIMEOUT) || 65000;
let isShuttingDown = false;

const app = express();
app.disable('x-powered-by');
app.response.originalSend = app.response.send;
app.response.send = function (this: Response, body) {
  if (isShuttingDown) {
    this.shouldKeepAlive = false;
  }

  // eslint-disable-next-line
  return this.originalSend(body);
};

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
