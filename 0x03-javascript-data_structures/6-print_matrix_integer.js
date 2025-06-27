/**
 * Function to print a matrix of integers.
 * Each row is printed on a separate line, with elements separated by spaces.
 * @param {Array<Array<number>>} matrix - 2D array of integers.
 * @returns {void}
 */
function print_matrix_integer(matrix) {
    if (matrix === null || matrix.length === 0) {
        return;
    }
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        console.log(row.join(' '));
    }
}
