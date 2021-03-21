import Koa from 'koa';
import { router } from './routes/router';

export const app = new Koa();

app.use(router.routes());

if (process.env.SERVER_PORT) {
  app.listen(process.env.SERVER_PORT);
}
