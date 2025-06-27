/**
 * Module: JsonSerializer
 * Description: Provides functionality to convert JavaScript objects to JSON strings.
 */

/**
 * Function name: objectToJsonString
 * Description: Converts a JavaScript object to a JSON string.
 * @param {Object} obj - The object to convert to JSON string.
 * @returns {string} JSON string representation of the object.
 */
function objectToJsonString(obj) {
  try {
    return JSON.stringify(obj, null, 2);
  } catch (error) {
    throw new Error(`Error converting object to JSON string: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  try {
    const sampleObj = {
      name: "Alice",
      age: 30,
      isStudent: false,
      hobbies: ["reading", "coding", "hiking"]
    };
    
    const jsonString = objectToJsonString(sampleObj);
    console.log(jsonString);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = objectToJsonString;
