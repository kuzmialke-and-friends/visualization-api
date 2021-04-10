import { Middleware } from 'koa';
import { fetchStaticMap } from '../../fetchers';

export const staticMapMiddleware: Middleware = async (ctx, next) => {
  if (!ctx.params.id) {
    ctx.throw(404);
    return;
  }

  const response = await fetchStaticMap(ctx.params.id);

  if (response?.statusCode !== 200 || !response.body) {
    ctx.throw(404);
    return;
  }

  ctx.body = {
    staticMap: response.body,
  };

  await next();
};
