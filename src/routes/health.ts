import { Router } from 'express';
import { healthCheck } from '../controllers/health';

const router: Router = Router();

// /health/
router.get('/', healthCheck);

export default router;
