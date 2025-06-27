/**
 * 100-magic_string.js
 *
 * This script defines a function that returns a string that changes its output
 * every time it's called based on internal state.
 */

/**
 * Returns a function that generates a unique string on each call.
 *
 * @returns {Function} A function that returns a "magic" string.
 */
function getUniqueStringGenerator() {
    let count = 0;
    return function () {
        count += 1;
        return 'value' + count;
    };
}

// Example usage:
const magicString = getUniqueStringGenerator();

console.log(magicString()); // "value1"
console.log(magicString()); // "value2"
console.log(magicString()); // "value3"
