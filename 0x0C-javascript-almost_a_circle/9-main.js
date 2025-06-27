// 9-main.js - Adding input validation to Rectangle

const Rectangle = require('./models/rectangle');

try {
  const invalid = new Rectangle(13, -4, 5);
} catch (err) {
  console.error("Validation Error:", err.message);
}
