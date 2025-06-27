/**
 * Rectangle class
 *
 * Represents a rectangle with dimensions and a print method.
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

  /**
   * Prints the rectangle by logging lines of 'X' characters.
   */
  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

module.exports = Rectangle;
