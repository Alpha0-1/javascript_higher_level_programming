// 18-main.js - Polymorphic behavior using array of shapes

const Rectangle = require('./models/rectangle');
const Square = require('./models/square');

const shapes = [
  new Rectangle(21, 4, 6),
  new Square(22, 5),
  new Rectangle(23, 2, 8)
];

shapes.forEach(shape => {
  console.log(`${shape.constructor.name} Area: ${shape.area()}`);
});
