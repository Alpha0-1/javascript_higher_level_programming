/**
 * Updates a dictionary with a new key-value pair.
 * @param {Object} dict - The dictionary.
 * @param {string} key - The key to update.
 * @param {*} value - The value to set.
 * @returns {Object} The updated dictionary.
 */
function updateDictionary(dict, key, value) {
  dict[key] = value;
  return dict;
}

module.exports = updateDictionary;
