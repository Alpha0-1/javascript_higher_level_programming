// 12-main.js - Getter only for area

const Rectangle = require('./models/rectangle');

const rect = new Rectangle(16, 3, 4);
console.log(`Area via getter: ${rect.area}`); // Not recommended; use method instead
