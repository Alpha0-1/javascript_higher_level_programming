// 2-main.js - Square instantiation and inheritance demonstration

const Square = require('./models/square');
const square = new Square(3, 6);
console.log(`Square Area: ${square.area()}`);
