// Generates the Fibonacci sequence up to a specified number of terms

/**
 * Generates Fibonacci sequence up to a specified number of terms
 * @param {number} n - Number of terms to generate
 * @returns {number[]} An array containing the Fibonacci sequence
 */
function generateFibonacci(n) {
  if (typeof n !== 'number' || n <= 0) {
    throw new Error('Input must be a positive integer');
  }

  const sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Example usage
// console.log(generateFibonacci(10));

module.exports = generateFibonacci;

