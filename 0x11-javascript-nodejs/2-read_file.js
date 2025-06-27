/**
 * File: 2-read_file.js
 * Description: Reads content from a file using fs.readFile
 */

const fs = require("fs");
const fileName = "sample.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:\n", data);
});
