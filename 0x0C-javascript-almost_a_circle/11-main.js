// 11-main.js - Getter and setter for width in Rectangle

const Rectangle = require('./models/rectangle');

const rect = new Rectangle(15, 4, 6);
rect.width = 8;
console.log(`Updated Width: ${rect.width}`);
