/**
 * Module: FileReader
 * Description: Provides functionality to read files synchronously.
 */

const fs = require('fs');

/**
 * Function name: readFileSynchronously
 * Description: Reads the contents of a file synchronously.
 * @param {string} filePath - The path to the file to be read.
 * @returns {string} The contents of the file as a string.
 */
function readFileSynchronously(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
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
    const content = readFileSynchronously(filePath);
    console.log(content);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = readFileSynchronously;
