/**
 * BaseGeometry class with integer validation.
 * This version adds input validation for integer values.
 * Demonstrates validation patterns and error handling in inheritance.
 */
class BaseGeometry {
  /**
   * Constructor for BaseGeometry
   * Creates a new instance of BaseGeometry
   */
  constructor() {
    // Base class constructor
  }

  /**
   * Calculate the area of the geometry.
   * This method should be overridden by subclasses.
   * Throws an error if called directly on BaseGeometry.
   * 
   * @throws {Error} Always throws error as this is an abstract method
   */
  area() {
    throw new Error('area() is not implemented');
  }

  /**
   * Validate that a value is a positive integer.
   * This method provides validation functionality for subclasses.
   * 
   * @param {string} name - The name of the value being validated (for error messages)
   * @param {*} value - The value to validate
   * @throws {TypeError} If value is not a number
   * @throws {Error} If value is not a positive integer
   */
  integerValidator(name, value) {
    // Check if value is a number
    if (typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    }

    // Check if value is an integer
    if (!Number.isInteger(value)) {
      throw new Error(`${name} must be an integer`);
    }

    // Check if value is positive
    if (value <= 0) {
      throw new Error(`${name} must be greater than 0`);
    }
  }

  /**
   * Get the name of the geometry class
   * @returns {string} The name of the class
   */
  toString() {
    return 'BaseGeometry';
  }

  /**
   * Get information about this geometry object
   * @returns {string} Basic information about the geometry
   */
  getInfo() {
    return 'This is a base geometry class with integer validation';
  }
}

// Export the class for use in other modules
module.exports = BaseGeometry;

// Example usage:
// const geometry = new BaseGeometry();
// 
// try {
//   geometry.integerValidator('width', 5); // Valid - no error
//   geometry.integerValidator('height', -1); // Invalid - throws error
// } catch (error) {
//   console.log(error.message); // 'height must be greater than 0'
// }
// 
// try {
//   geometry.integerValidator('length', 'not a number'); // Invalid - throws TypeError
// } catch (error) {
//   console.log(error.message); // 'length must be a number'
// }
