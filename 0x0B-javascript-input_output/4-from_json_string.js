/**
 * Module: JsonDeserializer
 * Description: Provides functionality to convert JSON strings to JavaScript objects.
 */

/**
 * Function name: jsonToObject
 * Description: Parses a JSON string into a JavaScript object.
 * @param {string} jsonString - The JSON string to parse.
 * @returns {Object} JavaScript object parsed from the JSON string.
 */
function jsonToObject(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error(`Error parsing JSON string: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  try {
    const jsonString = '{"name":"Bob","age":25,"isStudent":true,"hobbies":["sports","music"]}';
    const obj = jsonToObject(jsonString);
    console.log(obj);
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = jsonToObject;
