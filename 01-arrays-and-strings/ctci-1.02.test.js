const { checkPermutation } = require('./ctci-1.02.js');

describe('Determine if two strings are permutations of each other', () => {
  test('Return true if the strings are permutations', () => {
    expect(checkPermutation('hello', 'loleh')).toBe(true);
    expect(checkPermutation('h', 'h')).toBe(true);
    expect(checkPermutation('taco cat', 'atco cta')).toBe(true);
    expect(checkPermutation('', '')).toBe(true);
  });
  test('return false if the strings are not permutations', () => {
    expect(checkPermutation('h', 'a')).toBe(false);
    expect(checkPermutation('h', '')).toBe(false);
    expect(checkPermutation('hello', 'hellos')).toBe(false);
    expect(checkPermutation('foo', 'bar')).toBe(false);
  });
});