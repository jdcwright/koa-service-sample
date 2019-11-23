import Router from 'koa-router';
import withCache from '../middleware/withCache';
import { cacheTest } from '../controllers/cacheTestController';
const router = new Router();

router.get('/api/cache/test', withCache(), cacheTest);

export default router;
