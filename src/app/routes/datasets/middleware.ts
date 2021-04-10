import { Middleware } from 'koa';
import { fetchSubjects } from '../../fetchers';
import { limitSubjects, parseLimit } from './utils';

const DEFAULT_LIMIT = 2;

export const datasetsMiddleware: Middleware = async (ctx, next) => {
  if (!ctx.params.id) {
    ctx.throw(404);
    return;
  }

  const response = await fetchSubjects(ctx.params.id);

  if (response?.statusCode !== 200 || !response.body) {
    ctx.throw(404);
    return;
  }

  const subjects = response.body;

  const limit = parseLimit(ctx.query.limit) || DEFAULT_LIMIT;
  const limitedSubjects = limitSubjects(subjects, limit);

  ctx.body = {
    subjects: limitedSubjects,
    supportedVisualizations: ['graph', 'chart', 'map'],
  };

  await next();
};
