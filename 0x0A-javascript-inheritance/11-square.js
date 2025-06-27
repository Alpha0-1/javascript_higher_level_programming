/**
 * Import the Rectangle class to extend from
 */
const Rectangle = require('./9-rectangle');

/**
 * Square class with enhanced string representation and additional methods.
 * This version focuses on providing comprehensive string output and
 * demonstrates advanced method overriding and inheritance concepts.
 */
class Square extends Rectangle {
  /**
   * Constructor for Square
   * @param {number} size - The size (both width and height) of the square
   */
  constructor(size) {
    // Call the parent constructor with size for both width and height
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

    // Update all dimensions to maintain square properties
    this.__size = newSize;
    this.__width = newSize;
    this.__height = newSize;
  }

  /**
   * Calculate the diagonal of the square
   * @returns {number} The diagonal length of the square
   */
  diagonal() {
    return this.__size * Math.sqrt(2);
  }

  /**
   * Get string representation of the square.
   * Enhanced version with more detailed formatting.
   * 
   * @returns {string} Formatted string representation
   */
  toString() {
    return `[Square] ${this.__size} x ${this.__size}`;
  }

  /**
   * Print the square information to console.
   * Overrides the Rectangle print method with square-specific formatting.
   */
  print() {
    console.log(`[Square] ${this.__size} x ${this.__size}`);
  }

  /**
   * Get a comprehensive description of the square
   * @returns {string} Detailed information about the square
   */
  describe() {
    const area = this.area();
    const perimeter = this.perimeter();
    const diagonal = this.diagonal().toFixed(2);
    
    return `Square Analysis:
  Dimensions: ${this.__size} x ${this.__size}
  Area: ${area} square units
  Perimeter: ${perimeter
