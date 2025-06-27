/**
 * Import the BaseGeometry class to extend from
 */
const BaseGeometry = require('./7-base_geometry');

/**
 * Rectangle class that extends BaseGeometry.
 * This class demonstrates inheritance by extending BaseGeometry
 * and implementing the required area method while adding rectangle-specific functionality.
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
   * Get string representation of the rectangle
   * @returns {string} String representation showing dimensions
   */
  toString() {
    return `Rectangle(${this.__width}x${this.__height})`;
  }

  /**
   * Get detailed information about the rectangle
   * @returns {string} Detailed information including area and perimeter
   */
  getInfo() {
    return `Rectangle: ${this.__width}x${this.__height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}

// Export the class for use in other modules
module.exports = Rectangle;

// Example usage:
// const rect = new Rectangle(4, 5);
// console.log(rect.toString()); // 'Rectangle(4x5)'
// console.log(rect.area()); // 20
// console.log(rect.perimeter()); // 18
// console.log(rect.getInfo()); // 'Rectangle: 4x5, Area: 20, Perimeter: 18'
