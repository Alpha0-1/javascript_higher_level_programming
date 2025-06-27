/**
 * models/rectangle.js - Rectangle class implementation.
 *
 * This file defines the Rectangle class, which extends the Base class.
 * It demonstrates inheritance and polymorphism through method overriding.
 */

const Base = require('./base');

class Rectangle extends Base {
  /**
   * Creates a Rectangle instance.
   * @param {number} id - Unique ID for the rectangle.
   * @param {number} width - Width of the rectangle.
   * @param {number} height - Height of the rectangle.
   */
  constructor(id, width, height) {
    super(id);
    this.width = width;
    this.height = height;
  }

  /**
   * Calculates the area of the rectangle.
   * @returns {number} Area of the rectangle.
   */
  area() {
    return this.width * this.height;
  }

  /**
   * Returns string representation of the rectangle.
   * @returns {string}
   */
  toString() {
    return `Rectangle (ID: ${this.getId()}, Width: ${this.width}, Height: ${this.height})`;
  }
}

module.exports = Rectangle;
