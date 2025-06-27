// 7-delete_file.js - Deleting a file

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'oldfile.txt');

fs.unlink(filePath, (err) => {
  if (err) {
    console.error("Error deleting file:", err.message);
    return;
  }
  console.log("File deleted successfully.");
});
