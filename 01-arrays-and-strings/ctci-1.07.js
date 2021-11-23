function rotateMatrix(matrix) {
  /*
  Time: O(n^2)
  Space: O(1)

  Where:
    n = matrix.length
  */
  const n = matrix.length;
  const quadrantX = Math.ceil(n / 2);
  const quadrantY = Math.floor(n / 2);
  for (let x = 0; x < quadrantX; x++) {
    for (let y = 0; y < quadrantY; y++) {
      [matrix[y][x], matrix[x][n-y-1], matrix[n-y-1][n-x-1], matrix[n-x-1][y]] =
        [matrix[n-x-1][y], matrix[y][x], matrix[x][n-y-1], matrix[n-y-1][n-x-1]];
    }
  }
  return matrix;
}

module.exports = { rotateMatrix };