import { Router } from 'express';
import healthRoutes from './health';
import tweetRoutes from './tweet';

const router: Router = Router();

// Mount health routes at /health
router.use('/health', healthRoutes);

// Mount tweet routes at /tweet
router.use('/tweet', tweetRoutes);

export default router;
