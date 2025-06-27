/**
 * Module: FileWriter
 * Description: Provides functionality to write content to a file synchronously.
 */

const fs = require('fs');

/**
 * Function name: writeFileSynchronously
 * Description: Writes content to a file synchronously.
 * @param {string} filePath - The path to the file to be written.
 * @param {string} content - The content to write to the file.
 */
function writeFileSynchronously(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Successfully wrote to file: ${filePath}`);
  } catch (error) {
    throw new Error(`Error writing to file: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  const filePath = process.argv[2];
  const content = process.argv[3];

  if (!filePath || !content) {
    console.error('Please provide both file path and content as arguments.');
    process.exit(1);
  }

  try {
    writeFileSynchronously(filePath, content);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = writeFileSynchronously;
