/**
 * Replaces all occurrences of a value in an array.
 * @param {Array} array - The original array.
 * @param {any} search - The value to find.
 * @param {any} replace - The value to replace with.
 * @returns {Array} A new array with replaced values.
 */
function searchReplace(array, search, replace) {
  return array.map(element => element === search ? replace : element);
}
