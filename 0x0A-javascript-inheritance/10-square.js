/**
 * Import the Rectangle class to extend from
 */
const Rectangle = require('./9-rectangle');

/**
 * Square class that extends Rectangle.
 * This class demonstrates multi-level inheritance by extending Rectangle
 * which already extends BaseGeometry, creating an inheritance chain.
 * Since a square is a special case of rectangle where width equals height.
 */
class Square extends Rectangle {
  /**
   * Constructor for Square
   * @param {number} size - The size (both width and height) of the square
   */
  constructor(size) {
    // Call the parent constructor with size for both width and height
    // This ensures that width === height, making it a square
    super(size, size);

    // Store the size for easy access
    this.__size = size;
  }

  /**
   * Get the size of the square
   * @returns {number} The size of the square
   */
  get size() {
    return this.__size;
  }

  /**
   * Set the size of the square.
   * When size changes, both width and height should change.
   * 
   * @param {number} newSize - The new size for the square
   */
  set size(newSize) {
    // Validate the new size using inherited validation
    this.integerValidator('size', newSize);

    // Update both dimensions to maintain square properties
    this.__size = newSize;
    this.__width = newSize;
    this.__height = newSize;
  }

  /**
   * Calculate the diagonal of the square
   * @returns {number} The diagonal length of the square
   */
  diagonal() {
    // For a square, diagonal = size * √2
    return this.__size * Math.sqrt(2);
  }

  /**
   * Get string representation of the square.
   * Overrides the Rectangle toString method.
   * 
   * @returns {string} Formatted string representation
   */
  toString() {
    return `[Square] ${this.__size} x ${this.__size}`;
  }

  /**
   * Get detailed description of the square
   * @returns {string} Comprehensive information about the square
   */
  describe() {
    return `${this.toString()} - Area: ${this.area()}, Perimeter: ${this.perimeter()}, Diagonal: ${this.diagonal().toFixed(2)}`;
  }

  /**
   * Check if this is indeed a square (always true for this class)
   * Overrides the Rectangle isSquare method
   * @returns {boolean} Always returns true
   */
  isSquare() {
    return true;
  }
}

// Export the class for use in other modules
module.exports = Square;

// Example usage:
// const square = new Square(4);
// console.log(square.toString()); // '[Square] 4 x 4'
// console.log(square.area()); // 16
// console.log(square.perimeter()); // 16
// console.log(square.diagonal()); // 5.656854249492381
// console.log(square.describe()); // '[Square] 4 x 4 - Area: 16, Perimeter: 16, Diagonal: 5.66'
// console.log(square.isSquare()); // true
// 
// square.size = 5; // Change the size
// console.log(square.toString()); // '[Square] 5 x 5'
// console.log(square.area()); // 25
