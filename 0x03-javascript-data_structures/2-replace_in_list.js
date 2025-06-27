/**
 * Replaces an element in an array at the specified index.
 * @param {Array} myArray - The input array.
 * @param {number} idx - Index where replacement should occur.
 * @param {*} newElement - Element to replace with.
 * @returns {Array} A new array with the replaced element.
 */
function replace_in_list(myArray, idx, newElement) {
    const newArray = [...myArray];
    if (idx >= 0 && idx < newArray.length) {
        newArray[idx] = newElement;
    }
    return newArray;
}
