// 1-main.js - Rectangle instantiation and area calculation

const Rectangle = require('./models/rectangle');
const rect = new Rectangle(2, 5, 3);
console.log(`Rectangle Area: ${rect.area()}`);
