/**
 * @file 1-writeme.js
 * @description Writes a given string into a specified file.
 * @usage node 1-writeme.js <filename> <content>
 */

const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Usage: node 1-writeme.js <filename> <content>');
  process.exit(1);
}

const filename = process.argv[2];
const content = process.argv[3];

fs.writeFile(filename, content, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing file: ${err.message}`);
    return;
  }
  console.log(`Successfully wrote to ${filename}`);
});
