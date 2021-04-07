import Koa from 'koa';
import { router } from './routes/router';

export const startService = () => {
  const app = new Koa();

  app.use(router.routes());
  app.use(router.allowedMethods());

  if (process.env.SERVER_PORT) {
    app.listen(process.env.SERVER_PORT);
  }

  return app;
};

export const app = startService();
