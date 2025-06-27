/**
 * Lazy matrix multiplication using map and reduce.
 *
 * @param {Array<Array<number>>} m1 - First matrix
 * @param {Array<Array<number>>} m2 - Second matrix
 * @returns {Array<Array<number>>} Resulting matrix
 */
function lazyMatrixMul(m1, m2) {
  if (!Array.isArray(m1) || !Array.isArray(m2)) {
    throw new TypeError('Matrices must be arrays');
  }

  const transpose = mat => mat[0].map((_, colIndex) => mat.map(row => row[colIndex]));

  const transposedB = transpose(m2);

  return m1.map(row =>
    transposedB.map(col =>
      row.reduce((sum, val, i) => sum + val * col[i], 0)
    )
  );
}

module.exports = lazyMatrixMul;
