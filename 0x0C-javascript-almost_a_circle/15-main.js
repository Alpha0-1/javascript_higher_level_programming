// 15-main.js - JSON representation of Rectangle

const Rectangle = require('./models/rectangle');

const rect = new Rectangle(18, 6, 8);
console.log('Rectangle JSON:', rect.toJSON());
