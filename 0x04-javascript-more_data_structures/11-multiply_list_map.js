/**
 * Multiplies all elements in a list by a given number using map.
 * @param {Array<number>} list - List of numbers.
 * @param {number} multiplier - Multiplier.
 * @returns {Array<number>} New list with multiplied values.
 */
function multiplyListMap(list, multiplier) {
  return list.map(num => num * multiplier);
}

module.exports = multiplyListMap;
