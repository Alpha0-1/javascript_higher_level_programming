// Square class that inherits from Rectangle

const Rectangle = require('./4-rectangle');

/**
 * Square - class representing a square, extends Rectangle
 * @class
 * @extends Rectangle
 */
class Square extends Rectangle {
  /**
   * Creates a square
   * @param {number} size - The size of the square's sides
   */
  constructor(size) {
    super(size, size); // Call Rectangle constructor with equal width and height
  }
}

module.exports = Square;

