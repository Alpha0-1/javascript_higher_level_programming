// Concatenates the contents of two files and prints the result to standard output

const fs = require('fs');

/**
 * Concatenates two files and prints the result to the console
 * @param {string} file1 - Path to the first file
 * @param {string} file2 - Path to the second file
 */
function concatFiles(file1, file2) {
  try {
    const content1 = fs.readFileSync(file1, 'utf-8');
    const content2 = fs.readFileSync(file2, 'utf-8');
    console.log(content1 + content2);
  } catch (error) {
    console.error('Error reading files:', error.message);
  }
}

// Example usage (uncomment and replace with actual file paths)
// concatFiles('fileA.txt', 'fileB.txt');

module.exports = concatFiles;

