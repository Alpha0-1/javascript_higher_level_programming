/**
 * Squares each element of a matrix.
 * @param {Array<Array<number>>} matrix - The input matrix.
 * @returns {Array<Array<number>>} A new matrix with squared values.
 */
function squareMatrixSimple(matrix) {
  return matrix.map(row => row.map(num => num * num));
}
