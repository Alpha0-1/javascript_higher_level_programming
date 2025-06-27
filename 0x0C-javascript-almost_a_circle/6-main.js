// 6-main.js - Multiple Rectangle instances

const Rectangle = require('./models/rectangle');

const r1 = new Rectangle(7, 2, 3);
const r2 = new Rectangle(8, 5, 5);

console.log(r1.toString());
console.log(r2.toString());
