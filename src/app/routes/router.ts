import Router from '@koa/router';
import got from 'got';

export const router = new Router();

const fetch = async (id: string) => {
  try {
    const response = await got(
      `${process.env.DATA_BACKEND}/datasets/${id}.json`,
    );
    return response;
  } catch (error) {
    return null;
  }
};

const parseResponse = (body: string) => {
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
};

router.get('/datasets/:id', async (ctx, _) => {
  if (!ctx.params.id) {
    ctx.throw(404);
    return;
  }

  const response = await fetch(ctx.params.id);

  if (!response) {
    ctx.throw(404);
    return;
  }

  const dataset = parseResponse(response.body);

  if (!dataset) {
    ctx.throw(404);
    return;
  }

  ctx.body = {
    dataset,
    supportedVisualizations: [],
  };
});
