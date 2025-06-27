// Demonstrates creating a function that can be exported and used in other files

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

// Export the function so it can be used by other modules
module.exports = add;
