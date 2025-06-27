/**
 * This script checks if a number is positive, negative, or zero.
 * It logs the result to the console.
 */

// Example number to evaluate
const number = Math.floor(Math.random() * 201) - 100; // Random number between -100 and 100

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`${number} is zero`);
}
