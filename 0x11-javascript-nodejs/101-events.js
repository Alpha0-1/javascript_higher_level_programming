// 101-events.js - Using the events module

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register listener
myEmitter.on('event', (arg1, arg2) => {
  console.log("Event emitted with arguments:", arg1, arg2);
});

// Emit event
myEmitter.emit('event', 'Hello', 'World');
