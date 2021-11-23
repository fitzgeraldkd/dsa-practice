function zeroMatrix(matrix) {
  /*
  Time: O(mn)
  Space: O(m + n)

  Where:
    m = matrix.length (number of rows)
    n = matrix[0].length (number of columns)
  */
  const m = matrix.length;
  const n = matrix[0].length;
  const columnsToZero = {};
  const rowsToZero = {};
  for (let y=0; y<m; y++) {
    for (let x=0; x<n; x++) {
      if (matrix[y][x] === 0) {
        columnsToZero[x] = true;
        rowsToZero[y] = true;
      }
    }
  }
  for (let y=0; y<m; y++) {
    for (let x=0; x<n; x++) {
      if (columnsToZero[x] || rowsToZero[y]) matrix[y][x] = 0;
    }
  }
  return matrix;
}

module.exports = { zeroMatrix };