const { stringRotation } = require('./ctci-1.09.js');

const isSubstring = jest.fn().mockImplementation((str1, str2) => {
  return str1.includes(str2);
});

describe('Check if two strings are rotations of each other, calling isSubstring only once', () => {
  test('Return true if strings are rotations', () => {
    isSubstring.mockClear();
    expect(stringRotation('waterbottle', 'erbottlewat', isSubstring)).toBe(true);
    expect(isSubstring).toHaveBeenCalledTimes(1);
  });
  test('Return false if strings are not rotations', () => {
    isSubstring.mockClear();
    expect(stringRotation('foo', 'bar', isSubstring)).toBe(false);
    expect(isSubstring).toHaveBeenCalledTimes(1);
  });
});