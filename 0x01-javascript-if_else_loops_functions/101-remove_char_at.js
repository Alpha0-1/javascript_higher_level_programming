/**
 * Removes the character at a specified index from a string.
 * @param {string} str - Original string.
 * @param {number} index - Index to remove.
 * @returns {string} New string without the removed character.
 */

function removeCharAt(str, index) {
    if (index < 0 || index >= str.length) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + 1);
}

console.log(removeCharAt("JavaScript", 4)); // Javacript
