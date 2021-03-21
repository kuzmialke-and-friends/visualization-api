import Router from '@koa/router';

export const router = new Router();

router.get('/', (ctx, _) => {
  ctx.body = 'Hello World!';
});
