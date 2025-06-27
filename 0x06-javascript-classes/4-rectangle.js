/**
 * Rectangle class
 *
 * Represents a rectangle with utility methods to rotate and double its size.
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
   * Rotates the rectangle by swapping width and height.
   */
  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }

  /**
   * Doubles both width and height of the rectangle.
   */
  double() {
    this.width *= 2;
    this.height *= 2;
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
