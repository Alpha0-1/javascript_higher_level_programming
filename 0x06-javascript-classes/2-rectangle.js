/**
 * Rectangle class
 *
 * Represents a rectangle with validated dimensions.
 */
class Rectangle {
  /**
   * Creates a new Rectangle instance.
   * 
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }

    this.width = width;
    this.height = height;
  }
}

module.exports = Rectangle;
