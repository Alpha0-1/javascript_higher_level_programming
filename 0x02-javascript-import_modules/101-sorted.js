// Sorts a dictionary (object) by its values in descending order

/**
 * Sorts a dictionary by values in descending order
 * @param {Object} dict - The input dictionary with string keys and number values
 * @returns {Object} A new object sorted by values in descending order
 */
function sortDictByValuesDescending(dict) {
  return Object.fromEntries(
    Object.entries(dict).sort(([, a], [, b]) => b - a)
  );
}

// Example usage
const originalDict = {
  Alice: 30,
  Bob: 50,
  Charlie: 40
};

const sortedDict = sortDictByValuesDescending(originalDict);

console.log('Original dictionary:', originalDict);
console.log('Sorted dictionary:', sortedDict);

module.exports = sortDictByValuesDescending;

