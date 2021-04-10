import { limitSubjects, parseLimit } from './utils';

describe('parseLimit', () => {
  it('returns undefined if type of limit is undefined', () => {
    expect(parseLimit(undefined)).toBeUndefined();
  });

  it('returns undefined if type of limit is string[]', () => {
    expect(parseLimit(['1', '3'])).toBeUndefined();
  });

  it('returns parsed valid limit from non valid string', () => {
    expect(parseLimit('abc')).toBeUndefined();
  });

  it('returns parsed from valid strinng', () => {
    expect(parseLimit('1')).toBe(1);
  });

  it('returns parsed valid limit from mixed string', () => {
    expect(parseLimit('1asbsd')).toBe(1);
  });
});

describe('limitSubjects', () => {
  const defaultSubjects = {
    A: [],
    B: [],
    C: [],
    D: [],
    F: [],
  };

  it('returns first n keys from an object', () => {
    const subjects = { ...defaultSubjects };

    const limit = 2;

    expect(limitSubjects(subjects, limit)).toEqual({
      A: [],
      B: [],
    });
  });

  it('returns first n keys from an object equal to limit', () => {
    const subjects = { ...defaultSubjects };

    const limit = 3;

    expect(Object.keys(limitSubjects(subjects, limit))).toHaveLength(limit);
  });

  it('returns whole object if limit is bigger than keys lenght', () => {
    const subjects = { ...defaultSubjects };

    const limit = 10;

    expect(limitSubjects(subjects, limit)).toEqual({
      ...subjects,
    });
  });
});
