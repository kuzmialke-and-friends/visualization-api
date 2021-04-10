import Router from '@koa/router';
import { datasetsMiddleware } from './datasets';
import { staticMapMiddleware } from './staticMap';

export const router = new Router();

router.get('/datasets/:id', datasetsMiddleware);

router.get('/static-map/:id', staticMapMiddleware);

router.get('/health', async (ctx, next) => {
  await next();

  ctx.body = 'Ok';
});
