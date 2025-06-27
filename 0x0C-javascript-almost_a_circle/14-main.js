// 14-main.js - Adding a static factory method

const Rectangle = require('./models/rectangle');

const rect = Rectangle.create(17, 4, 5);
console.log(rect.toString());
