/**
 * Returns a new dictionary with values multiplied by 2.
 * @param {Object} dict - Dictionary with numeric values.
 * @returns {Object} New dictionary with values doubled.
 */
function multiplyBy2(dict) {
  const result = {};
  for (const key in dict) {
    result[key] = dict[key] * 2;
  }
  return result;
}

module.exports = multiplyBy2;


