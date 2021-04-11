import { Middleware } from 'koa';
import { fetchSubjects } from '../../fetchers';
import { getLogger } from '../../logger';
import { limitSubjects, parseLimit } from './utils';

const DEFAULT_LIMIT = 2;

const LOG = getLogger(__filename);

const defaultConfig = {
  ghost: ['chart', 'map'],
  jump: ['chart', 'map'],
  maze: [],
};

type DatasetType = keyof typeof defaultConfig;

const isDatasetConfigured = (
  datasetId?: unknown,
  config = defaultConfig,
): datasetId is DatasetType => Object.keys(config).includes(String(datasetId));

const getSupportedVisualizations = (
  datasetId: DatasetType,
  config = defaultConfig,
) => config[datasetId];

export const datasetsMiddleware: Middleware = async (ctx, next) => {
  const { id = '' } = ctx.params;
  if (!id) {
    ctx.throw(404);
    return;
  }

  ctx.assert(isDatasetConfigured(id), 404, 'Dataset not found %s', id);

  LOG.info('Fetching subjects for %s.', id);

  const response = await fetchSubjects(id);

  if (response?.statusCode !== 200 || !response.body) {
    ctx.throw(404);
    return;
  }

  const subjects = response.body;

  LOG.info('Parsing limit %s.', ctx.query.limit);

  const limit = parseLimit(ctx.query.limit) || DEFAULT_LIMIT;

  ctx.body = {
    subjects: limitSubjects(subjects, limit),
    supportedVisualizations: getSupportedVisualizations(id),
  };

  await next();
};
