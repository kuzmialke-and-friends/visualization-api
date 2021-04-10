import { Subjects } from 'app/types';

export const parseLimit = (limit?: string | string[]) => {
  if (typeof limit !== 'string') {
    return undefined;
  }
  const parsedLimit = parseInt(limit, 10);

  return !Number.isNaN(parsedLimit) ? parsedLimit : undefined;
};

export const limitSubjects = (subjects: Subjects, limit: number) =>
  Object.keys(subjects)
    .slice(0, limit)
    .reduce((acc, key) => ({ ...acc, [key]: subjects[key] }), {});
