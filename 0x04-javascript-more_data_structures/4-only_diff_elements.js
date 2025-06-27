/**
 * Finds elements present in only one of two arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @returns {Array} A sorted array of unique elements.
 */
function onlyDiffElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const diff = new Set([...set1].concat([...set2]).filter(num => !(set1.has(num) && set2.has(num))));
  return Array.from(diff).sort((a, b) => a - b);
}
