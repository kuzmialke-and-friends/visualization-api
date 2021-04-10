import { getLogger } from 'app/logger';
import { Middleware } from 'koa';
import { fetchSubjects } from '../../fetchers';
import { limitSubjects, parseLimit } from './utils';

const DEFAULT_LIMIT = 2;

const LOG = getLogger(__filename);

export const datasetsMiddleware: Middleware = async (ctx, next) => {
  if (!ctx.params.id) {
    ctx.throw(404);
    return;
  }

  LOG.info('Fetching subjects for %s.', ctx.params.id);

  const response = await fetchSubjects(ctx.params.id);

  if (response?.statusCode !== 200 || !response.body) {
    ctx.throw(404);
    return;
  }

  const subjects = response.body;

  LOG.info('Parsing limit %s.', ctx.query.limit);

  const limit = parseLimit(ctx.query.limit) || DEFAULT_LIMIT;

  LOG.info('Limiting subjects %s.');
  const limitedSubjects = limitSubjects(subjects, limit);

  ctx.body = {
    subjects: limitedSubjects,
    supportedVisualizations: ['graph', 'chart', 'map'],
  };

  await next();
};
