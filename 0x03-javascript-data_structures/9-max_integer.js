/**
 * Function to find the maximum integer in a list.
 * @param {Array<number>} list - Array of integers.
 * @returns {number|null} The maximum integer, or null if the list is empty.
 */
function max_integer(list) {
    if (list.length === 0) {
        return null;
    }
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}
