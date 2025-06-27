/**
 * Module: FileAppender
 * Description: Provides functionality to append content to a file.
 */

const fs = require('fs');

/**
 * Function name: appendToFile
 * Description: Appends content to the end of a file.
 * @param {string} filePath - The path to the file to append to.
 * @param {string} content - The content to append to the file.
 */
function appendToFile(filePath, content) {
  try {
    fs.appendFileSync(filePath, content);
    console.log(`Successfully appended to file: ${filePath}`);
  } catch (error) {
    throw new Error(`Error appending to file: ${error.message}`);
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
    appendToFile(filePath, content);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = appendToFile;
