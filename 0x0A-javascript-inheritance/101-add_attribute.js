/**
 * Function to add a new attribute to an object.
 * This demonstrates dynamic property addition and how JavaScript objects
 * can be extended at runtime, which is fundamental to understanding
 * how inheritance and object manipulation work.
 * 
 * @param {Object} obj - The object to add the attribute to
 * @param {string} name - The name of the new attribute
 * @param {*} value - The value to assign to the new attribute
 * @returns {Object} The modified object (for method chaining)
 */
function addAttribute(obj, name, value) {
  // Validate that obj is actually an object
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('First parameter must be an object');
  }

  // Validate that name is a string
  if (typeof name !== 'string') {
    throw new TypeError('Attribute name must be a string');
  }

  // Validate that name is not empty
  if (name.trim() === '') {
    throw new Error('Attribute name cannot be empty');
  }

  // Add the new attribute to the object
  obj[name] = value;

  // Return the object to allow method chaining
  return obj;
}

/**
 * Advanced function to add multiple attributes at once.
 * This function demonstrates how to extend objects with multiple properties
 * and shows more advanced object manipulation techniques.
 * 
 * @param {Object} obj - The object to add attributes to
 * @param {Object} attributes - Object containing key-value pairs to add
 * @returns {Object} The modified object
 */
function addMultipleAttributes(obj, attributes) {
  // Validate that obj is actually an object
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('First parameter must be an object');
  }

  // Validate that attributes is an object
  if (attributes === null || typeof attributes !== 'object') {
    throw new TypeError('Attributes parameter must be an object');
  }

  // Add each attribute from the attributes object
  for (const [key, value] of Object.entries(attributes)) {
    // Use the single attribute function for consistency and validation
    addAttribute(obj, key, value);
  }

  return obj;
}

/**
 * Function to safely add an attribute only if it doesn't already exist.
 * This demonstrates defensive programming and property checking.
 * 
 * @param {Object} obj - The object to add the attribute to
 * @param {string} name - The name of the new attribute
 * @param {*} value - The value to assign to the new attribute
 * @param {boolean} force - Whether to overwrite existing attributes
 * @returns {Object} The modified object
 */
function addAttributeSafely(obj, name, value, force = false) {
  // Validate parameters using the basic addAttribute function
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('First parameter must be an object');
  }

  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('Attribute name must be a non-empty string');
  }

  // Check if the attribute already exists
  if (obj.hasOwnProperty(name) && !force) {
    console.warn(`Warning: Attribute '${name}' already exists. Use force=true to overwrite.`);
    return obj;
  }

  // Add the attribute
  obj[name] = value;
  return obj;
}

// Export the functions for use in other modules
module.exports = {
  addAttribute,
  addMultipleAttributes,
  addAttributeSafely
};

// Example usage:
// const person = { name: 'John', age: 30 };
// 
// // Add a single attribute
// addAttribute(person, 'city', 'New York');
// console.log(person); // { name: 'John', age: 30, city: 'New York' }
// 
// // Add multiple attributes
// addMultipleAttributes(person, {
//   profession: 'Developer',
//   hobby: 'Reading',
//   married: true
// });
// console.log(person); 
// // { name: 'John', age: 30, city: 'New York', profession: 'Developer', hobby: 'Reading', married: true }
// 
// // Safe attribute addition
// addAttributeSafely(person, 'name', 'Jane'); // Warning: won't overwrite
// addAttributeSafely(person, 'name', 'Jane', true); // Will overwrite
// 
// // Method chaining example
// const car = {};
// addAttribute(car, 'brand', 'Toyota')
//   .make = 'Camry'; // Can continue adding properties
// 
// console.log(car); // { brand: 'Toyota', make: 'Camry' }
