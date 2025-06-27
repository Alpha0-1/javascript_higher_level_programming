/**
 * This script gets the last digit of a number and logs whether it's greater than 5,
 * is 0, or is less than 6 and not 0.
 */

const number = Math.floor(Math.random() * 1000); // Random number up to 999
let lastDigit = number % 10;

console.log(`The last digit of ${number} is ${lastDigit}`);

if (lastDigit > 5) {
    console.log("and is greater than 5");
} else if (lastDigit === 0) {
    console.log("and is 0");
} else {
    console.log("and is less than 6 and not 0");
}
