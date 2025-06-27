/**
 * Square class
 *
 * Represents a square, which is a special type of rectangle.
 */
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  /**
   * Creates a new Square instance.
   * 
   * @param {number} size - The side length of the square.
   */
  constructor(size) {
    super(size, size);
  }
}

module.exports = Square;
