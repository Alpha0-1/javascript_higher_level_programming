// 3-default-parameter.js — Setting default values for function parameters

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();              // Hello, Guest!
greet('Alice');       // Hello, Alice!

// Complex default values can also be expressions
function logTime(time = new Date().toLocaleTimeString()) {
  console.log('Current time:', time);
}

logTime(); // Uses current time
logTime('10:00 AM'); // Uses provided value
