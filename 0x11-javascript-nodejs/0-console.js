// 0-console.js - Using the console module in Node.js

// Log general information
console.log("This is a log message.");

// Log an error message
console.error("This is an error message.");

// Log a warning message
console.warn("This is a warning message.");

// Group related logs
console.group("User Data");
console.log("Name: Alice");
console.log("Age: 30");
console.groupEnd();

// Time execution duration
console.time("Loop Timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop Timer");

// Output:
// This script demonstrates various methods of the console module.
// Run using: node 0-console.js
