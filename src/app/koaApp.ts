import Koa from 'koa';
import { router } from 'app/routes/router';

export const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

if (process.env.SERVER_PORT) {
  app.listen(process.env.SERVER_PORT);
}
