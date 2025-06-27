/**
 * Counts keys with number values in an object.
 * @param {Object} obj - The input object.
 * @returns {number} The count of keys with number values.
 */
function numberKeys(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      count++;
    }
  }
  return count;
}
