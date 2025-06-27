// 102-streams.js - Reading and writing using streams

const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'input.txt'), 'utf8');
const writeStream = fs.createWriteStream(path.join(__dirname, 'output_stream.txt'));

readStream.on('data', (chunk) => {
  console.log("Chunk received:");
  console.log(chunk);
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log("Finished reading and writing.");
});
