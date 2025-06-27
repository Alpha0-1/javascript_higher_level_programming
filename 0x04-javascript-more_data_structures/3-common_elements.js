/**
 * Finds common elements between two arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @returns {Array} A sorted array of common elements.
 */
function commonElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const common = new Set([...set1].filter(num => set2.has(num)));
  return Array.from(common).sort((a, b) => a - b);
}
