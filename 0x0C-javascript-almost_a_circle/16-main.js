// 16-main.js - JSON representation of Square

const Square = require('./models/square');

const sq = new Square(19, 9);
console.log('Square JSON:', sq.toJSON());
