/**
 * Module: ClassSerializer
 * Description: Provides functionality to serialize class instances to JSON.
 */

/**
 * Function name: getClassInstanceJson
 * Description: Converts a class instance to a JSON representation.
 * @param {Object} instance - An instance of a class to convert to JSON.
 * @returns {Object} A plain object representing the JSON serialization of the instance.
 */
function getClassInstanceJson(instance) {
  try {
    // Get all properties directly defined on the instance
    const properties = Object.getOwnPropertyNames(instance);
    
    // Create an object with all instance properties
    const result = {};
    
    for (const prop of properties) {
      result[prop] = instance[prop];
    }
    
    return result;
  } catch (error) {
    throw new Error(`Error serializing class instance: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  class Person {
    constructor(name, age, isStudent) {
      this.name = name;
      this.age = age;
      this.isStudent = isStudent;
    }
  }

  try {
    const person = new Person("David", 22, true);
    const jsonRepresentation = getClassInstanceJson(person);
    console.log(JSON.stringify(jsonRepresentation, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = getClassInstanceJson;
