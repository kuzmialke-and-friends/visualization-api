import Koa from 'koa';
import cors from '@koa/cors';
import { router } from './routes/router';

export const startService = () => {
  const app = new Koa();

  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  if (process.env.PORT) {
    app.listen(process.env.PORT);
  }

  return app;
};

export const app = startService();
