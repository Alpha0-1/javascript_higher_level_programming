/**
 * Prints and returns the last digit of a number.
 * Handles both positive and negative integers.
 * @param {number} n - The number.
 * @returns {number} The absolute last digit.
 */

function printLastDigit(n) {
    const lastDigit = Math.abs(n % 10);
    console.log(lastDigit);
    return lastDigit;
}

printLastDigit(123);
printLastDigit(-456);
