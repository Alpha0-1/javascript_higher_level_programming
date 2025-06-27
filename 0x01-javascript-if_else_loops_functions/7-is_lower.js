/**
 * Checks if a character is a lowercase letter.
 * @param {string} char - A single character string.
 * @returns {boolean} True if lowercase, false otherwise.
 */

function isLowercase(char) {
    return char.length === 1 && char >= 'a' && char <= 'z';
}

// Test example
console.log(isLowercase('a')); // true
console.log(isLowercase('A')); // false
