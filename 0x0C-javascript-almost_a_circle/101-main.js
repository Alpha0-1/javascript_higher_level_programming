// 101-main.js - Using Mixins or Composition

const { Loggable } = require('./mixins/loggingMixin');
const Rectangle = require('./models/rectangle');

class LoggableRectangle extends Loggable(Rectangle) {}

const rect = new LoggableRectangle(26, 5, 7);
rect.logCreation(); // From mixin
console.log(rect.toString());

