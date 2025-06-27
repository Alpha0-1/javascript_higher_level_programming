// 6-create_file.js - Creating a new file

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'newfile.txt');

fs.open(filePath, 'w', (err, fd) => {
  if (err) {
    console.error("Error creating file:", err.message);
    return;
  }
  fs.close(fd, (closeErr) => {
    if (closeErr) {
      console.error("Error closing file:", closeErr.message);
      return;
    }
    console.log("File created and closed successfully.");
  });
});
