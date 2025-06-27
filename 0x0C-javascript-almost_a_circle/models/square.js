/**
 * models/square.js - Square class implementation.
 *
 * This file defines the Square class, which extends the Rectangle class.
 * Demonstrates inheritance from Rectangle and shows how to reuse logic.
 */

const Rectangle = require('./rectangle');

class Square extends Rectangle {
  /**
   * Creates a Square instance.
   * @param {number} id - Unique ID for the square.
   * @param {number} side - Length of the square's side.
   */
  constructor(id, side) {
    super(id, side, side); // Reuse Rectangle constructor
  }

  /**
   * Overrides the toString method for Square.
   * @returns {string}
   */
  toString() {
    return `Square (ID: ${this.getId()}, Side: ${this.width})`;
  }
}

module.exports = Square;
