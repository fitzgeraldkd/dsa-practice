const { insertion } = require('./ctci-5.01.js');

describe('Given two 32-bit numbers, insert one into the other with given bit positions', () => {
  test('Insert 10011 into 10000000000 at indeces 2 and 6', () => {
    expect(insertion({n: 0b10000000000, m: 0b10011, i: 2, j: 6})).toBe(0b10001001100);
  });
  test('Insert 1001 into 111111 at indeces 1 and 5', () => {
    expect(insertion({n: 0b111111, m: 0b1001, i: 1, j: 5})).toBe(0b110011);
  });
  test('Insert 101 into 111111 at indeces 1 and 5', () => {
    expect(insertion({n: 0b111111, m: 0b101, i: 1, j: 5})).toBe(0b101011)
  })
});