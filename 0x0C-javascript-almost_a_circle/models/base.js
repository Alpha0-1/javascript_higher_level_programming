/**
 * models/base.js - Base class implementation.
 *
 * This file contains the definition of the Base class, which serves as a parent class
 * for other geometric shapes like Rectangle and Square. It demonstrates inheritance,
 * encapsulation, and basic object-oriented design principles in JavaScript.
 */

class Base {
  /**
   * Creates an instance of Base.
   * @param {number} id - The unique identifier for this shape.
   */
  constructor(id) {
    this._id = id; // Protected-like property using naming convention
  }

  /**
   * Gets the ID of the shape.
   * @returns {number} The ID of the shape.
   */
  getId() {
    return this._id;
  }

  /**
   * Abstract method placeholder for area calculation.
   * Should be overridden by subclasses.
   * @abstract
   */
  area() {
    throw new Error("Area method must be implemented by subclass");
  }
}

module.exports = Base;
