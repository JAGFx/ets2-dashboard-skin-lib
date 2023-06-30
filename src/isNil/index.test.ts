import { utils } from 'src/isNil/index';

describe('isNil', () => {
  test('true', () => {
    expect(utils.isNil(undefined)).toBe(true);
    expect(utils.isNil(null)).toBe(true);
  });

  test('false', () => {
    expect(utils.isNil('')).toBe(false);
    expect(utils.isNil([])).toBe(false);
    expect(utils.isNil({})).toBe(false);
    expect(utils.isNil(25)).toBe(false);
    expect(utils.isNil(() => undefined)).toBe(false);
    expect(utils.isNil(Symbol('my symbol'))).toBe(false);
  });
});
