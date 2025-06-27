/**
 * Deletes a key from a dictionary.
 * @param {Object} dict - The dictionary.
 * @param {string} key - Key to delete.
 * @returns {Object} Updated dictionary.
 */
function simpleDelete(dict, key) {
  delete dict[key];
  return dict;
}

module.exports = simpleDelete;
