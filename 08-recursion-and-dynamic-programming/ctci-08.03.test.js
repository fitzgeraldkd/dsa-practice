const { magicIndexDistinct, magicIndex } = require('./ctci-08.03.js');

const algorithms = [
  {functionRef: magicIndexDistinct, desc: 'Algorithm for arrays with distinct values'},
  {functionRef: magicIndex, desc: 'Algorithm for arrays with non-distinct values'}
]

describe('Returns a magic index (A[i] = i) from an array, if one exists', () => {
  algorithms.forEach(algorithm => {
    describe(algorithm.desc, () => {
      test('Returns a magic index when one exists', () => {
        expect(algorithm.functionRef([-5, -3, 0, 1, 4, 8, 10, 100])).toBe(4);
        expect(algorithm.functionRef([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13])).toBe(7);
      });
      
      test('Returns null when no magic index exists', () => {
        expect(algorithm.functionRef([-8, -4, -3, 5, 8, 20])).toBe(null);
      });

      if (algorithm.functionRef === magicIndex) {
        test('Returns a magic index when one exists among non-distinct values', () => {
          expect([1, 5]).toContain(algorithm.functionRef([1, 2, 3, 4, 5, 5, 7]))
          expect([2, 7]).toContain(algorithm.functionRef([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]))
        });

        test('Returns null when no magic index exists among non-distinct values', () => {
          expect(algorithm.functionRef([-8, -4, -4, -3, 5, 8, 8, 20])).toBe(null);
        });
      }
    });
  });
});