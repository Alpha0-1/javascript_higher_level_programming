/**
 * Module: FileLineInserter
 * Description: Provides functionality to append text after a specific line in a file.
 */

const fs = require('fs');
const path = require('path');

/**
 * Function name: appendAfterLine
 * Description: Appends text after lines containing a specific search string.
 * @param {string} filePath - Path to the file to modify.
 * @param {string} search - String to search for in the file.
 * @param {string} text - Text to append after matching lines.
 */
function appendAfterLine(filePath, search, text) {
  try {
    // Read the file content
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    
    // Process each line
    const modifiedLines = [];
    for (const line of lines) {
      modifiedLines.push(line);
      if (line.includes(search)) {
        modifiedLines.push(text);
      }
    }
    
    // Write the modified content back to the file
    fs.writeFileSync(filePath, modifiedLines.join('\n'));
    console.log(`Successfully modified file: ${filePath}`);
  } catch (error) {
    throw new Error(`Error modifying file: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  const filePath = path.join(__dirname, 'test.txt');
  const search = process.argv[2];
  const text = process.argv[3];

  if (!search || !text) {
    console.error('Please provide both search string and text to insert as arguments.');
    process.exit(1);
  }

  try {
    appendAfterLine(filePath, search, text);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = appendAfterLine;
