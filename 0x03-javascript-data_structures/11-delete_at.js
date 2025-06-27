/**
 * Deletes an element at a specific index in an array.
 * @param {Array} myArray - Original array.
 * @param {number} idx - Index to delete.
 * @returns {Array} New array without the deleted element.
 */
function delete_at(myArray, idx) {
    if (idx < 0 || idx >= myArray.length) return myArray;
    const newArray = [...myArray];
    newArray.splice(idx, 1);
    return newArray;
}
