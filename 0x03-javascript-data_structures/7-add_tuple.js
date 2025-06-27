/**
 * Function to add two tuples (arrays with two elements).
 * @param {Array<number>} tuple1 - First tuple containing two integers.
 * @param {Array<number>} tuple2 - Second tuple containing two integers.
 * @returns {Array<number>} A new tuple with the sum of corresponding elements.
 */
function add_tuple(tuple1, tuple2) {
    return [
        (tuple1[0] || 0) + (tuple2[0] || 0),
        (tuple1[1] || 0) + (tuple2[1] || 0)
    ];
}
