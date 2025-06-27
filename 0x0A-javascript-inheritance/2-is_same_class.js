/**
 * Function to check if an object is exactly an instance of a specified class.
 * This function checks for exact class match, not inheritance.
 * It demonstrates the difference between exact type checking and inheritance checking.
 * 
 * @param {Object} obj - The object to check
 * @param {Function} classDefinition - The class constructor to check against
 * @returns {boolean} True if obj is exactly an instance of classDefinition, false otherwise
 */
function isSameClass(obj, classDefinition) {
  // Check if both parameters are valid
  if (obj === null || obj === undefined || typeof classDefinition !== 'function') {
    return false;
  }

  // Use constructor property to check exact class match
  // This only returns true if the object was created directly from this class
  return obj.constructor === classDefinition;
}

// Export the function for use in other modules
module.exports = isSameClass;

// Example usage and demonstration:
// class Animal {}
// class Dog extends Animal {}
// 
// const animal = new Animal();
// const dog = new Dog();
// 
// console.log(isSameClass(animal, Animal)); // true - exact match
// console.log(isSameClass(dog, Dog)); // true - exact match
// console.log(isSameClass(dog, Animal)); // false - dog is instance of Dog, not Animal directly
// console.log(isSameClass([], Array)); // true - array is instance of Array
// console.log(isSameClass('hello', String)); // false - primitive strings don't have constructor property
