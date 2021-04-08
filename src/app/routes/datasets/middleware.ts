import { fetchDatasets } from 'app/fetchers';
import { parseResponse } from 'app/utils';

export const datasetsMiddleware = async (ctx, _) => {
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

  ctx.body = {
    dataset,
    supportedVisualizations: [],
  };
};
