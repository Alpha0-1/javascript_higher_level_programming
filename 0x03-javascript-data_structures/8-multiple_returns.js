
/**
 * Returns multiple values from a list: length and first element.
 * If list is empty, returns length 0 and first element null.
 * @param {Array<any>} list - The input list.
 * @returns {Array} Array containing the length and first element (or null).
 */
function multiple_returns(list) {
    if (list.length === 0) {
        return [0, null];
    }
    return [list.length, list[0]];
}

module.exports = multiple_returns;

