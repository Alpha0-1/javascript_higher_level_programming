/**
 * utils/shapeFactory.js - Factory module for shape creation.
 *
 * This module defines a ShapeFactory class that provides a centralized way
 * to instantiate different types of shapes based on input parameters.
 */

const Rectangle = require('../models/rectangle');
const Square = require('../models/square');

class ShapeFactory {
  /**
   * Creates a shape instance based on type.
   * @param {string} type - 'rectangle' or 'square'.
   * @param {number} id - Unique ID for the shape.
   * @param {number} dim1 - First dimension (width or side).
   * @param {number} [dim2] - Optional second dimension (height for rectangle).
   * @returns {Base} An instance of Rectangle or Square.
   */
  static createShape(type, id, dim1, dim2) {
    switch (type.toLowerCase()) {
      case 'rectangle':
        return new Rectangle(id, dim1, dim2);
      case 'square':
        return new Square(id, dim1);
      default:
        throw new Error(`Unknown shape type: ${type}`);
    }
  }
}

module.exports = ShapeFactory;
