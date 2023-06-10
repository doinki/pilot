import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.type('text/plain');
  res.send('OK');
});

export default router;
