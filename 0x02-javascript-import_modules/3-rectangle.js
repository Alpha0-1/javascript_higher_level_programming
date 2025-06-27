// Rectangle class with width/height validation, print, rotate, and double methods

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

  /**
   * Prints the rectangle using the character 'X'
   */
  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  /**
   * Rotates the rectangle by swapping width and height
   */
  rotate() {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  /**
   * Doubles the size of the rectangle
   * Multiplies both width and height by 2
   */
  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
