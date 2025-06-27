/**
 * Lookup function for attributes in an object.
 * This function demonstrates basic property access and serves as
 * an introduction to object manipulation in JavaScript.
 * 
 * @param {Object} obj - The object to look up properties in
 * @param {string} key - The property key to search for
 * @returns {*} The value associated with the key, or undefined if not found
 */
function lookup(obj, key) {
  // Check if the object has the property as its own (not inherited)
  if (obj && obj.hasOwnProperty(key)) {
    return obj[key];
  }
  
  // Return undefined if property doesn't exist
  return undefined;
}

// Export the function for use in other modules
module.exports = lookup;

// Example usage:
// const myObj = { name: 'John', age: 30 };
// console.log(lookup(myObj, 'name')); // 'John'
// console.log(lookup(myObj, 'height')); // undefined
