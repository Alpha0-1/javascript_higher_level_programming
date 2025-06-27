/**
 * Divides all elements of a matrix by a divisor.
 * @param {number[][]} matrix - Two-dimensional array of numbers.
 * @param {number} div - The divisor.
 * @returns {number[][]} New matrix with each element divided by div, rounded to 2 decimals.
 * @throws {TypeError} If matrix elements are not numbers or div is not a number.
 * @throws {Error} If div is 0.
 */
function matrixDivided(matrix, div) {
  if (typeof div !== 'number') {
    throw new TypeError('div must be a number');
  }
  if (div === 0) {
    throw new Error('division by zero');
  }
  if (!Array.isArray(matrix) || matrix.length === 0) {
    throw new TypeError('matrix must be a non-empty array of arrays');
  }
  const rowLength = matrix[0].length;
  if (!matrix.every(row => Array.isArray(row) && row.length === rowLength)) {
    throw new TypeError('Each row of the matrix must have the same length');
  }
  return matrix.map(row =>
    row.map(num => {
      if (typeof num !== 'number') {
        throw new TypeError('matrix must contain only numbers');
      }
      return Number((num / div).toFixed(2));
    })
  );
}

module.exports = matrixDivided;

