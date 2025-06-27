// 0-constants.js — Demonstrating const and let in ES6

// Using 'const' for variables that shouldn't be reassigned
const PI = 3.14159;
console.log('Value of PI:', PI);

// Trying to reassign a const will throw an error
// PI = 3.14; // Uncommenting this line will cause an error

// Using 'let' for block-scoped mutable variables
let counter = 0;
counter++;
console.log('Counter value:', counter); // Output: 1

// Best practice: Use const by default unless the variable needs to change.
