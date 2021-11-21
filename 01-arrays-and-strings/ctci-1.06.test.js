const { stringCompression } = require('./ctci-1.06.js');

describe('Compress string with counts of repeated characters', () => {
  test('Compress if new string is smaller', () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression('Aaaaaabbcc')).toBe('A1a5b2c2');
  });
  test('Return original string if the generated string is not smaller', () => {
    expect(stringCompression('foo')).toBe('foo');
    expect(stringCompression('aabbcc')).toBe('aabbcc');
    expect(stringCompression('')).toBe('');
  });
});