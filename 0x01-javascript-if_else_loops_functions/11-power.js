/**
 * Calculates the power of a base raised to an exponent.
 * @param {number} base - Base number.
 * @param {number} exponent - Exponent (positive integer).
 * @returns {number} Result of base^exponent.
 */

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
