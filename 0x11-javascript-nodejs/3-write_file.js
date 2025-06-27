/**
 * File: 3-write_file.js
 * Description: Writes content to a file using fs.writeFile
 */

const fs = require("fs");
const content = "Hello, this was written to a file using Node.js!";

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File successfully written!");
});
