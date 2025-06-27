/**
 * Raises a TypeError exception intentionally.
 * 
 * @throws {TypeError} - Always throws a TypeError.
 */

function raiseException() {
  throw new TypeError('This is a TypeError exception');
}

// Example usage:
// try {
//   raiseException();
// } catch (e) {
//   console.error(e.message);
// }

module.exports = raiseException;

