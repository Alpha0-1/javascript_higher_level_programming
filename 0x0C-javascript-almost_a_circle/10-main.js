// 10-main.js - Input validation in Square

const Square = require('./models/square');

try {
  const invalid = new Square(14, -3);
} catch (err) {
  console.error("Validation Error:", err.message);
}
