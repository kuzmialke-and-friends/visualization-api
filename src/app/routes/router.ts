import Router from '@koa/router';
import { datasetsMiddleware } from './datasets';

export const router = new Router();

router.get('/datasets/:id', datasetsMiddleware);
