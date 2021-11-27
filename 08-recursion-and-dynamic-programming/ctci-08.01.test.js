const { tripleStep } = require('./ctci-08.01.js');

describe('Return the number of ways to climb a staircase with 1, 2, or 3 steps at a time', () => {
  test('', () => {
    expect(tripleStep(1)).toBe(1);
    expect(tripleStep(2)).toBe(2);
    expect(tripleStep(3)).toBe(4);
    expect(tripleStep(4)).toBe(7);
    expect(tripleStep(10)).toBe(274);
  });
});