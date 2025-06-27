// 5-spread-operator.js — Expanding elements of an array or object

// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log('Combined array:', combined); // [1, 2, 3, 4]

// Clone arrays
const original = [5, 6];
const copy = [...original];
copy.push(7);
console.log('Original:', original); // [5, 6]
console.log('Copy:', copy);         // [5, 6, 7]

// Spread in function calls
function add(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log('Add with spread:', add(...nums)); // 60

// Object spreading
const user = { name: 'John' };
const userDetails = { ...user, age: 30 };
console.log('User details:', userDetails); // { name: 'John', age: 30 }
