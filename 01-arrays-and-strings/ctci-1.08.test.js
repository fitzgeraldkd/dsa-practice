const { zeroMatrix } = require('./ctci-1.08.js');

describe('zeroMatrix takes a matrix and where an element is 0 changes the entire row and column to 0', () => {
  test('Matrices with no 0 elements remain unchanged', () => {
    expect(zeroMatrix([[1, 2], [3, 4]])).toStrictEqual([[1, 2], [3, 4]]);
  });
  test('Matrices with one 0 element are modified', () => {
    expect(zeroMatrix([[1, 0], [3, 4]])).toStrictEqual([[0, 0], [3, 0]]);
  });
  test('Matrices with multiple 0 elements are modified', () => {
    const matrixToCheck = [
      [1, 2, 3, 4],
      [5, 0, 7, 8],
      [9, 10, 11, 0],
      [13, 14, 15, 16]
    ];
    const zeroedMatrix = [
      [1, 0, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [13, 0, 15, 0]
    ];
    expect(zeroMatrix(matrixToCheck)).toStrictEqual(zeroedMatrix);
  });
});