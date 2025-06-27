/**
 * Prints sorted key-value pairs of an object.
 * @param {Object} obj - The input object.
 */
function printSortedDictionary(obj) {
  const sortedKeys = Object.keys(obj).sort();
  sortedKeys.forEach(key => console.log(`${key}: ${obj[key]}`));
}
