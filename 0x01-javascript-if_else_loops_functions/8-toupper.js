/**
 * Converts a lowercase character to uppercase.
 * If input is not lowercase, returns it unchanged.
 * @param {string} char - A single character.
 * @returns {string} Uppercase version or original.
 */

function toUpper(char) {
    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(char.charCodeAt(0) - 32);
    }
    return char;
}

console.log(toUpper('b')); // B
console.log(toUpper('B')); // B
