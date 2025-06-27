// 5-main.js - Attempting to call abstract method (should throw error)

const Base = require('./models/base');

try {
  const base = new Base(6);
  base.area(); // Should throw an error
} catch (err) {
  console.error("Expected Error:", err.message);
}
