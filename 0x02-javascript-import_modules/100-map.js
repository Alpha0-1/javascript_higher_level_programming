// Demonstrates the use of Array.prototype.map() to create a new array with modified values

/**
 * Multiplies each value in the input array by its index and returns the new array
 * @param {number[]} array - The original array of numbers
 * @returns {number[]} A new array where each element is value * index
 */
function mapMultiplyByIndex(array) {
  return array.map((value, index) => value * index);
}

// Example usage
const originalArray = [1, 2, 3, 4];
const newArray = mapMultiplyByIndex(originalArray);

console.log('Original array:', originalArray);
console.log('Mapped array:', newArray);

module.exports = mapMultiplyByIndex;

