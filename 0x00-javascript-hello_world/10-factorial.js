// Demonstrates calculating the factorial of a number using a loop

/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // Multiply result by each number up to n
  }
  return result;
}

// Example usage
const num = 5;
console.log("The factorial of", num, "is:", factorial(num));
