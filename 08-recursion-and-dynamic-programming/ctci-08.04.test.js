const { powerSet } = require('./ctci-08.04.js');

describe('powerSet', () => {
  test('Return all subsets of a set', () => {
    expect(powerSet(['a', 'b', 'c']).sort()).toStrictEqual([[], ['a'], ['b'], ['c'], ['a', 'b'], ['b', 'c'], ['a', 'c'], ['a', 'b', 'c']].sort());
  });
});