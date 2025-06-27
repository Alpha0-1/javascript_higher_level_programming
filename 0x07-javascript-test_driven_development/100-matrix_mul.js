/**
 * Optimized version of matrix multiplication.
 *
 * @param {Array<Array<number>>} m1 - First matrix
 * @param {Array<Array<number>>} m2 - Second matrix
 * @returns {Array<Array<number>>} Resulting matrix
 */
function optimizedMatrixMul(m1, m2) {
  const rowsA = m1.length;
  const colsA = m1[0].length;
  const colsB = m2[0].length;

  if (m1[0].length !== m2.length) {
    throw new Error('The matrices can\'t be multiplied');
  }

  const result = new Array(rowsA);

  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB).fill(0);
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}

module.exports = optimizedMatrixMul;
