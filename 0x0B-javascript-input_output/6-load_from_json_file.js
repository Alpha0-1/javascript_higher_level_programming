/**
 * Module: JsonFileReader
 * Description: Provides functionality to load a JavaScript object from a JSON file.
 */

const fs = require('fs');

/**
 * Function name: loadFromJsonFile
 * Description: Loads a JavaScript object from a JSON file.
 * @param {string} filePath - The path to the JSON file to read.
 * @returns {Object} JavaScript object parsed from the JSON file.
 */
function loadFromJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error loading JSON file: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  const filePath = process.argv[2];
  
  if (!filePath) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
  }

  try {
    const obj = loadFromJsonFile(filePath);
    console.log(obj);
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = loadFromJsonFile;
