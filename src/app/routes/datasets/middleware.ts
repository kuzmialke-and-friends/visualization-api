import { Middleware } from 'koa';
import { fetchDatasets } from '../../fetchers';
import { parseResponse } from '../../utils';
import { limitSubjects, parseLimit } from './utils';

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

  const subjects = parseResponse(response.body);

  if (!subjects) {
    ctx.throw(404);
    return;
  }

  const limit = parseLimit(ctx.query.limit) || DEFAULT_LIMIT;
  const limitedSubjects = limitSubjects(subjects, limit);

  ctx.body = {
    subjects: limitedSubjects,
    supportedVisualizations: ['graph', 'chart', 'map'],
  };
};
