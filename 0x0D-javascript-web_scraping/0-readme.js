/**
 * @file 0-readme.js
 * @description This script reads the content of a specified file and prints it to the console.
 * It uses the built-in 'fs' module to perform the file reading operation.
 */

const fs = require('fs');

// Define the file path
const filePath = 'README.md';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Print error to the console if file read fails
    console.error(`Error reading file: ${err.message}`);
    return;
  }
  // Print file content
  console.log(data);
});

