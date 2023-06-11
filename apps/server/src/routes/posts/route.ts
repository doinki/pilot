import express from 'express';
import * as R from 'remeda';

import prisma from '../../prisma';

const router = express.Router();

router.get('/', async (req, res) => {
  const page = R.pipe(
    req.query.page,
    (value) => (R.isArray(value) ? value : [value]),
    R.last,
    Number,
    (value) => (R.isNumber(value) ? value : 1),
    R.clamp({ max: Number.MAX_SAFE_INTEGER, min: 1 }),
    Math.floor
  );
  const size = R.pipe(
    req.query.size,
    (value) => (R.isArray(value) ? value : [value]),
    R.last,
    Number,
    (value) => (R.isNumber(value) ? value : 10),
    R.clamp({ max: 100, min: 1 }),
    Math.floor
  );

  const [count, posts] = await Promise.all([
    prisma.post.count(),
    prisma.post.findMany({
      orderBy: [{ date: 'desc' }, { id: 'desc' }],
      skip: (page - 1) * size,
      take: size,
    }),
  ]);

  const previous = R.pipe(
    (page - 2) * size,
    (value) => value >= 0 && value < count,
    (value) => {
      const url = new URL(req.baseUrl, process.env.URL);
      url.searchParams.append('size', String(size));
      url.searchParams.append('page', String(page - 1));

      return value ? url : null;
    }
  );
  const next = R.pipe(
    page * size,
    (value) => value < count,
    (value) => {
      const url = new URL(req.baseUrl, process.env.URL);
      url.searchParams.append('size', String(size));
      url.searchParams.append('page', String(page + 1));

      return value ? url : null;
    }
  );

  res.json({ count, data: posts, next, previous });
});

export default router;
