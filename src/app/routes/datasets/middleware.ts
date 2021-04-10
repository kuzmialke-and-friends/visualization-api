import { Middleware } from 'koa';
import { fetchSubjects } from '../../fetchers';
import { getLogger } from '../../logger';
import { limitSubjects, parseLimit } from './utils';

const DEFAULT_LIMIT = 2;

const LOG = getLogger(__filename);

const isHeroku = String(process.env.HEROKU) === 'true';

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

  ctx.body = {
    subjects: isHeroku ? subjects : limitSubjects(subjects, limit),
    supportedVisualizations: ['graph', 'chart', 'map'],
  };

  await next();
};
