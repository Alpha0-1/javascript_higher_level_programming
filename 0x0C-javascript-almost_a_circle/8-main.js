// 8-main.js - Type checking with instanceof

const Rectangle = require('./models/rectangle');
const Square = require('./models/square');

const rect = new Rectangle(11, 2, 3);
const sq = new Square(12, 5);

console.log(`rect is Rectangle: ${rect instanceof Rectangle}`); // true
console.log(`sq is Square: ${sq instanceof Square}`);           // true
console.log(`sq is Rectangle: ${sq instanceof Rectangle}`);    // true
