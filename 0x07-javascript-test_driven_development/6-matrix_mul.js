/**
 * Multiplies two matrices.
 * @param {number[][]} m_a - First matrix.
 * @param {number[][]} m_b - Second matrix.
 * @returns {number[][]} Result of matrix multiplication.
 * @throws {TypeError} If inputs are not matrices of numbers.
 * @throws {Error} If matrices cannot be multiplied due to dimension mismatch.
 */
function matrixMul(m_a, m_b) {
  if (!Array.isArray(m_a) || !Array.isArray(m_b)) {
    throw new TypeError('Both arguments must be matrices (arrays of arrays)');
  }
  if (m_a.length === 0 || m_b.length === 0) {
    throw new TypeError('Matrices cannot be empty');
  }

  const aRows = m_a.length;
  const aCols = m_a[0].length;
  const bRows = m_b.length;
  const bCols = m_b[0].length;

  if (!m_a.every(row => Array.isArray(row) && row.length === aCols)) {
    throw new TypeError('m_a must be a matrix with rows of equal length');
  }
  if (!m_b.every(row => Array.isArray(row) && row.length === bCols)) {
    throw new TypeError('m_b must be a matrix with rows of equal length');
  }

  if (aCols !== bRows) {
    throw new Error('Matrices cannot be multiplied due to dimension mismatch');
  }

  if (
    !m_a.every(row => row.every(num => typeof num === 'number')) ||
    !m_b.every(row => row.every(num => typeof num === 'number'))
  ) {
    throw new TypeError('Matrices must contain only numbers');
  }

  const result = Array.from({ length: aRows }, () =>
    Array(bCols).fill(0)
  );

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      for (let k = 0; k < aCols; k++) {
        result[i][j] += m_a[i][k] * m_b[k][j];
      }
    }
  }

  return result;
}

module.exports = matrixMul;

