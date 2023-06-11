import express from 'express';

import healthRoute from './health/route';
import postsRoute from './posts/route';

const router = express.Router();

router.use('/health', healthRoute);
router.use('/posts', postsRoute);

export default router;
