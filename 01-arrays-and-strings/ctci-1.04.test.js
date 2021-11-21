const { palindromePermutation } = require('./ctci-1.04.js');

describe('Determine if string is a permutation of a palindrome', () => {
  test('Return true if permutation of palindrome', () => {
    expect(palindromePermutation('racerac')).toBe(true);
    expect(palindromePermutation('')).toBe(true);
    expect(palindromePermutation('taco         cat')).toBe(true);
  });
  test('Return false if not a permutation of palindrome', () => {
    expect(palindromePermutation('testing')).toBe(false);
    expect(palindromePermutation('racecars')).toBe(false);
  });
});