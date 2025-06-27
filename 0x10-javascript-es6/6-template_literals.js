// 6-template-literals.js — Multiline strings and string interpolation

const name = 'Alice';
const age = 25;

// Traditional concatenation
console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// Using template literals
console.log(`My name is ${name} and I am ${age} years old.`);

// Multiline strings
const message = `
Welcome to our platform, ${name}.
You are ${age} years old.
Enjoy your stay!
`;

console.log(message);
