/**
 * Multiplies two matrices.
 * @param {Array<Array<number>>} matrix1 - First matrix.
 * @param {Array<Array<number>>} matrix2 - Second matrix.
 * @returns {Array<Array<number>>} Resulting matrix.
 */
function compute_matrix(matrix1, matrix2) {
    const rows = matrix1.length;
    const cols = matrix2[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[i].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}
