// 17-main.js - Deserializing from JSON

const Rectangle = require('./models/rectangle');

const data = { id: 20, width: 3, height: 4 };
const rect = Rectangle.fromJSON(data);
console.log(rect.toString());
