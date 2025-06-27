/**
 * Returns a new matrix with each value squared using map.
 * @param {Array<Array<number>>} matrix - A 2D array of numbers.
 * @returns {Array<Array<number>>} A new 2D array with squared values.
 */
function squareMatrixMap(matrix) {
  return matrix.map(row => row.map(num => num ** 2));
}

module.exports = squareMatrixMap;
