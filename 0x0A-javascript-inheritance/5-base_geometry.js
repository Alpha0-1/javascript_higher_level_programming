/**
 * BaseGeometry class - A foundational class for geometric shapes.
 * This class serves as a base for other geometry classes and demonstrates
 * the concept of creating a parent class for inheritance.
 */
class BaseGeometry {
  /**
   * Constructor for BaseGeometry
   * Creates a new instance of BaseGeometry
   */
  constructor() {
    // Base class constructor - can be extended by subclasses
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
    return 'This is a base geometry class';
  }
}

// Export the class for use in other modules
module.exports = BaseGeometry;

// Example usage:
// const geometry = new BaseGeometry();
// console.log(geometry.toString()); // 'BaseGeometry'
// console.log(geometry.getInfo()); // 'This is a base geometry class'
