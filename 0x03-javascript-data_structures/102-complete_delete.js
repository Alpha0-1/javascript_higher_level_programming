/**
 * Deletes all occurrences of a given value from the list.
 * Modifies the original list.
 * @param {Array<any>} list - The list to modify.
 * @param {*} value - The value to delete.
 * @returns {Array<any>} The modified list.
 */
function complex_delete(list, value) {
    let i = 0;
    while (i < list.length) {
        if (list[i] === value) {
            list.splice(i, 1);
        } else {
            i++;
        }
    }
    return list;
}

module.exports = complex_delete;

