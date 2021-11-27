const { robotInAGrid } = require('./ctci-08.02.js');

describe('Find a path from the top left of a grid to the bottom right, only moving right or down', () => {
  test('Return false if no path is found', () => {
    expect(robotInAGrid(4, 4, [[2,3], [3,2]])).toBe(false);
  });
  test('Return a path to the bottom rigth corner', () => {
    expect(true).toBe(false);
  });
});