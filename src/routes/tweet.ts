import { Router } from 'express';
import { postTweet } from '../controllers/tweet';

const router: Router = Router();

// /tweet/
router.get('/post', postTweet);

export default router;
