const RectangleWithPrint = require('./3-rectangle');

/**
 * Extended Rectangle class with rotate and double methods.
 * @class
 */
class RectangleWithRotateAndDouble extends RectangleWithPrint {
  /**
   * Swaps the width and height of the rectangle (rotates it).
   */
  rotate() {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  /**
   * Doubles the width and height of the rectangle.
   */
  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = RectangleWithRotateAndDouble;
