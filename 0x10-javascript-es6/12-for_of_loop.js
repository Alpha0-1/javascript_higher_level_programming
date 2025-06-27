// 12-for-of-loop.js — Iterating over iterable objects like arrays

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}

// For-of with strings
const str = 'hello';
for (const char of str) {
  console.log(char);
}

// For-of with maps
const map = new Map([
  ['a', 1],
  ['b', 2]
]);

for (const [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}
