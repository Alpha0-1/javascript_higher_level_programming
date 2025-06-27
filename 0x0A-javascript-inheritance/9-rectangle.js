/**
 * Import the BaseGeometry class to extend from
 */
const BaseGeometry = require('./7-base_geometry');

/**
 * Rectangle class with enhanced string representation.
 * This version focuses on providing better string output and
 * demonstrates method overriding in inheritance.
 */
class Rectangle extends BaseGeometry {
  /**
   * Constructor for Rectangle
   * @param {number} width - The width of the rectangle
   * @param {number} height - The height of the rectangle
   */
  constructor(width, height) {
    // Call the parent constructor
    super();

    // Validate the width and height using inherited method
    this.integerValidator('width', width);
    this.integerValidator('height', height);

    // Set the rectangle dimensions
    this.__width = width;
    this.__height = height;
  }

  /**
   * Get the width of the rectangle
   * @returns {number} The width of the rectangle
   */
  get width() {
    return this.__width;
  }

  /**
   * Get the height of the rectangle
   * @returns {number} The height of the rectangle
   */
  get height() {
    return this.__height;
  }

  /**
   * Calculate the area of the rectangle.
   * Implements the abstract area method from BaseGeometry.
   * 
   * @returns {number} The area of the rectangle (width * height)
   */
  area() {
    return this.__width * this.__height;
  }

  /**
   * Calculate the perimeter of the rectangle
   * @returns {number} The perimeter of the rectangle
   */
  perimeter() {
    return 2 * (this.__width + this.__height);
  }

  /**
   * Get string representation of the rectangle.
   * Overrides the toString method to provide custom string representation.
   * 
   * @returns {string} Formatted string representation
   */
  toString() {
    return `[Rectangle] ${this.__width} x ${this.__height}`;
  }

  /**
   * Print the rectangle information to console.
   * Demonstrates a method that uses the toString representation.
   */
  print() {
    console.log(this.toString());
  }

  /**
   * Get a detailed description of the rectangle
   * @returns {string} Comprehensive information about the rectangle
   */
  describe() {
    return `${this.toString()} - Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }

  /**
   * Check if this rectangle is a square
   * @returns {boolean} True if width equals height
   */
  isSquare() {
    return this.__width === this.__height;
  }
}

// Export the class for use in other modules
module.exports = Rectangle;

// Example usage:
// const rect = new Rectangle(4, 5);
// console.log(rect.toString()); // '[Rectangle] 4 x 5'
// rect.print(); // Prints: [Rectangle] 4 x 5
// console.log(rect.describe()); // '[Rectangle] 4 x 5 - Area: 20, Perimeter: 18'
// console.log(rect.isSquare()); // false
// 
// const square = new Rectangle(3, 3);
// console.log(square.toString()); // '[Rectangle] 3 x 3'
// console.log(square.isSquare()); // true
