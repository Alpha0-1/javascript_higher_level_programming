/**
 * Removes all 'c' and 'C' characters from a string.
 * @param {string} str - Input string.
 * @returns {string} New string without 'c' or 'C'.
 */
function no_c(str) {
    return str.replace(/[cC]/g, '');
}
