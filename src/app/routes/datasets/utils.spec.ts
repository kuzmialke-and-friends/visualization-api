import { limitDataset, parseLimit } from './utils';

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

describe('limitDataset', () => {
  const defaultDataset = {
    A: [],
    B: [],
    C: [],
    D: [],
    F: [],
  };

  it('returns first n keys from an object', () => {
    const dataset = { ...defaultDataset };

    const limit = 2;

    expect(limitDataset(dataset, limit)).toEqual({
      A: [],
      B: [],
    });
  });

  it('returns first n keys from an object equal to limit', () => {
    const dataset = { ...defaultDataset };

    const limit = 3;

    expect(Object.keys(limitDataset(dataset, limit))).toHaveLength(limit);
  });

  it('returns whole object if limit is bigger than keys lenght', () => {
    const dataset = { ...defaultDataset };

    const limit = 10;

    expect(limitDataset(dataset, limit)).toEqual({
      ...dataset,
    });
  });
});
