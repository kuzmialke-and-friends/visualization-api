export const parseLimit = (limit?: string | string[]) => {
  if (typeof limit !== 'string') {
    return undefined;
  }
  const parsedLimit = parseInt(limit, 10);

  return !Number.isNaN(parsedLimit) ? parsedLimit : undefined;
};

export const limitSubjects = (
  dataset: Record<string, unknown>,
  limit: number,
) =>
  Object.entries(dataset)
    .slice(0, limit)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
