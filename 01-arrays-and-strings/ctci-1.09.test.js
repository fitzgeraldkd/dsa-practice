const { stringRotation } = require('./ctci-1.09.js');

describe('Check if two strings are rotations of each other, calling isSubstring only once', () => {
  test('Return true if strings are rotations', () => {
    expect(stringRotation('waterbottle', 'erbottlewat')).toBe(true);
  });
  test('Return false if strings are not rotations', () => {
    expect(stringRotation('foo', 'bar')).toBe(false);
  });
});