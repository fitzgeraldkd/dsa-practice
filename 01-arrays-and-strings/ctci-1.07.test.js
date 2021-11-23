const { rotateMatrix } = require('./ctci-1.07.js');

describe('Rotate an NxN matrix by 90 degrees', () => {
  test('Successfully rotate an array with an odd N', () => {
    expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
    const arrayToRotate = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const rotatedArray = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
    expect(rotateMatrix(arrayToRotate)).toStrictEqual(rotatedArray);
  });
  test('Successfully rotate an array with an even N', () => {
    const arrayToRotate = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const rotatedArray = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];
    expect(rotateMatrix(arrayToRotate)).toStrictEqual(rotatedArray);
  });
});