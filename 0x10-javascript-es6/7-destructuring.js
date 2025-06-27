// 7-destructuring.js — Extracting data from arrays and objects

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
console.log('First color:', first);   // red
console.log('Second color:', second); // green

// Object destructuring
const person = { name: 'Eve', age: 28, city: 'Berlin' };
const { name, age } = person;
console.log('Person name:', name); // Eve
console.log('Person age:', age);   // 28

// Renaming variables during destructuring
const { city: location } = person;
console.log('City:', location); // Berlin

// Default values
const { country = 'USA' } = {};
console.log('Country:', country); // USA
