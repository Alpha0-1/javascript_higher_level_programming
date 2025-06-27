/**
 * Prints a square made of '#' characters.
 *
 * @param {number} size - Size of the square
 */
function printSquare(size) {
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }

  if (size < 0) {
    throw new Error('size must be >= 0');
  }

  const roundedSize = Math.floor(size);

  for (let i = 0; i < roundedSize; i++) {
    console.log('#'.repeat(roundedSize));
  }
}

module.exports = printSquare;
