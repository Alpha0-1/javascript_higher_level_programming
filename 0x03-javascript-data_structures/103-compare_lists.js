/**
 * Compares two arrays for equality.
 * @param {Array} list1 - First array.
 * @param {Array} list2 - Second array.
 * @returns {boolean} True if both arrays are equal.
 */
function compare_lists(list1, list2) {
    if (list1.length !== list2.length) return false;
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) return false;
    }
    return true;
}
