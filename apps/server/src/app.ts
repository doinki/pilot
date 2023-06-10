import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import route from './routes/route';
import kakaoBlogPosts$ from './services/kakaoBlogPosts';

config();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT ?? 4000;
const KEEP_ALIVE_TIMEOUT = Number(process.env.KEEP_ALIVE_TIMEOUT) || 65000;

const prisma = new PrismaClient();

const app = express();
app.disable('x-powered-by');
app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(route);

const server = app.listen(PORT, () => {
  console.log(
    `\n\nProcess pid: ${process.pid}\nServer is running on port ${PORT}\n\n`
  );
});
server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;

setInterval(() => {
  kakaoBlogPosts$.subscribe({
    error: console.error,
    next: (newPost) => {
      prisma.post.findFirst({ where: { href: newPost.href } }).then((post) => {
        if (post) {
          return null;
        }

        return prisma.post.create({
          data: newPost,
        });
      });
    },
  });
}, 60 * 60 * 1000);

const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`\n\nProcess received a ${signal} signal\n\n`);

    if (app.response.originalSend) {
      return;
    }

    app.response.originalSend = app.response.send;
    app.response.send = function (body) {
      this.shouldKeepAlive = false;

      // eslint-disable-next-line
      return this.originalSend(body);
    };

    server.close(async (err) => {
      try {
        await prisma.$disconnect();
      } catch (e) {
        console.error(e);
      }

      if (err) {
        console.error(err);
        process.exit(1);
      }

      process.exit(0);
    });
  });
});
