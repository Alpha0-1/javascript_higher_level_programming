/**
 * Performs a complex calculation with exception handling
 */

function magicCalculation(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }

        const result = Math.sqrt(a + b);
        if (isNaN(result)) {
            throw new RangeError("Result is not a real number");
        }

        return result;
    } catch (e) {
        console.error(`Error in calculation: ${e.message}`);
        return null;
    }
}

// Example usage
console.log(magicCalculation(9, 16));      // 5
console.log(magicCalculation(-5, -5));     // Error: Result is not a real number
console.log(magicCalculation("five", 5));  // Error: Both arguments must be numbers
