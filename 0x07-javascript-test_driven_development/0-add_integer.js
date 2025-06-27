/**
 * @function addInteger
 * @description Adds two integers and returns the result
 * @param {number} a - The first integer
 * @param {number} b - The second integer (default: 98)
 * @returns {number} The sum of a and b
 * @throws {TypeError} If a or b are not integers
 */
export function addInteger(a, b = 98) {
    if (typeof a !== 'number' || !Number.isInteger(a)) {
        throw new TypeError('a must be an integer');
    }
    if (typeof b !== 'number' || !Number.isInteger(b)) {
        throw new TypeError('b must be an integer');
    }
    return a + b;
}
