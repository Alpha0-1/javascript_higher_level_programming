/**
 * Returns a new list where the element at the specified index is replaced with a new value.
 * Does not modify the original list.
 * @param {Array<any>} list - The original list.
 * @param {number} index - The index at which to replace the element.
 * @param {*} newValue - The new value to insert.
 * @returns {Array<any>} A new list with the replacement.
 */
function new_in_list(list, index, newValue) {
    const newList = list.slice(); // shallow copy
    if (index >= 0 && index < newList.length) {
        newList[index] = newValue;
    }
    return newList;
}

module.exports = new_in_list;

