// 7-main.js - Multiple Square instances

const Square = require('./models/square');

const s1 = new Square(9, 4);
const s2 = new Square(10, 7);

console.log(s1.toString());
console.log(s2.toString());
