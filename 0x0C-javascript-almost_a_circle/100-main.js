// 100-main.js - Module pattern usage with ShapeFactory

const ShapeFactory = require('./utils/shapeFactory'); // Assume this exists

const rect = ShapeFactory.createShape('rectangle', 24, 3, 4);
const sq = ShapeFactory.createShape('square', 25, 6);

console.log(rect.toString());
console.log(sq.toString());
