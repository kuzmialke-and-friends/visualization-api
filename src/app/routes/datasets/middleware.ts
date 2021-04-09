import { Middleware } from 'koa';
import { fetchDatasets } from 'app/fetchers';
import { parseResponse } from 'app/utils';
import { limitDataset, parseLimit } from './utils';

const DEFAULT_LIMIT = 2;

export const datasetsMiddleware: Middleware = async (ctx, _) => {
  if (!ctx.params.id) {
    ctx.throw(404);
    return;
  }

  const response = await fetchDatasets(ctx.params.id);

  if (!response) {
    ctx.throw(404);
    return;
  }

  const dataset = parseResponse(response.body);

  if (!dataset) {
    ctx.throw(404);
    return;
  }

  const limit = parseLimit(ctx.query.limit) || DEFAULT_LIMIT;
  const limitedDataset = limitDataset(dataset, limit);

  ctx.body = {
    dataset: limitedDataset,
    supportedVisualizations: [],
  };
};
