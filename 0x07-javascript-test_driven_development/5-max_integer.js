/**
 * Returns the largest integer in an array.
 *
 * @param {Array<number>} list - Array of numbers
 * @returns {number} Max value
 */
function maxInteger(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('list must be an array');
  }

  if (list.length === 0) {
    throw new Error('list is empty');
  }

  return Math.max(...list);
}

module.exports = maxInteger;
