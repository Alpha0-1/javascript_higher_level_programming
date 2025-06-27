/**
 * 19-copy_list.js
 *
 * This script defines a function that creates a shallow copy of an array.
 * A new array is returned containing the same elements as the original.
 */

/**
 * Creates a shallow copy of an array.
 *
 * @param {Array} arr - The array to be copied.
 * @returns {Array} A new array with the same elements as arr.
 */
function copyList(arr) {
    return arr.slice();
}

// Example usage:
const original = [1, 2, 3];
const copy = copyList(original);

console.log('Original:', original); // [1, 2, 3]
console.log('Copy:', copy);         // [1, 2, 3]
console.log('Same reference?', original === copy); // false
