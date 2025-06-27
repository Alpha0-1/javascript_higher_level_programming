// Rectangle class with width and height validation

/**
 * Rectangle - class representing a rectangle
 * @class
 */
class Rectangle {
  /**
   * Creates a rectangle
   * Validates that width and height are positive integers
   * @param {number} width - The width of the rectangle
   * @param {number} height - The height of the rectangle
   */
  constructor(width, height) {
    if (typeof width !== 'number' || width <= 0) {
      throw new Error('Width must be a positive number');
    }
    if (typeof height !== 'number' || height <= 0) {
      throw new Error('Height must be a positive number');
    }
    this.width = width;
    this.height = height;
  }
}

module.exports = Rectangle;

