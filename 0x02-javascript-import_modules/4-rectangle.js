/**
 * 4-rectangle.js - Adds a static method to create a square from Rectangle.
 */

const RectangleWithTransforms = require('./3-rectangle');

class RectangleWithSquare extends RectangleWithTransforms {
  /**
   * Static factory method to create a square (equal width and height).
   * @param {number} size - The side length of the square.
   * @returns {RectangleWithTransforms} A rectangle with equal sides.
   */
  static square(size) {
    return new RectangleWithTransforms(size, size);
  }
}

module.exports = RectangleWithSquare;
