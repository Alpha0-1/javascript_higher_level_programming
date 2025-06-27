/**
 * Module: JsonFileWriter
 * Description: Provides functionality to save a JavaScript object to a JSON file.
 */

const fs = require('fs');

/**
 * Function name: saveToJsonFile
 * Description: Saves a JavaScript object to a JSON file.
 * @param {Object} obj - The object to save.
 * @param {string} filePath - The path to the file where the object should be saved.
 */
function saveToJsonFile(obj, filePath) {
  try {
    const jsonString = JSON.stringify(obj, null, 2);
    fs.writeFileSync(filePath, jsonString);
    console.log(`Successfully saved object to JSON file: ${filePath}`);
  } catch (error) {
    throw new Error(`Error saving object to JSON file: ${error.message}`);
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
    const sampleObj = {
      name: "Charlie",
      age: 28,
      isStudent: false,
      courses: ["Math", "Physics", "Computer Science"]
    };
    
    saveToJsonFile(sampleObj, filePath);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = saveToJsonFile;
