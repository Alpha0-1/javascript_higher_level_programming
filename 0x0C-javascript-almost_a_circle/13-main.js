// 13-main.js - Static method example (e.g., validate inputs)

const Rectangle = require('./models/rectangle');

try {
  Rectangle.validateDimensions(5, 6); // Valid
  Rectangle.validateDimensions(-2, 4); // Invalid
} catch (err) {
  console.error("Static Validation Error:", err.message);
}
