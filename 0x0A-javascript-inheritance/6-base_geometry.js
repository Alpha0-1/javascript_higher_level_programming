/**
 * BaseGeometry class with area calculation method.
 * This version adds an area method that must be implemented by subclasses.
 * Demonstrates abstract method concept in JavaScript inheritance.
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
    return 'This is a base geometry class with area calculation capability';
  }
}

// Export the class for use in other modules
module.exports = BaseGeometry;

// Example usage:
// const geometry = new BaseGeometry();
// console.log(geometry.toString()); // 'BaseGeometry'
// console.log(geometry.getInfo()); // Information string
// 
// try {
//   geometry.area(); // This will throw an error
// } catch (error) {
//   console.log(error.message); // 'area() is not implemented'
// }
