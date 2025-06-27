// 0-main.js - Creating Base class instance

const Base = require('./models/base');
const base = new Base(1);
console.log(`Base ID: ${base.getId()}`);
