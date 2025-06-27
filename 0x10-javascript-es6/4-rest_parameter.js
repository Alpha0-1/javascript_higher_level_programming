// 4-rest-parameter.js — Collecting arguments into an array

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('Sum of 1,2,3:', sum(1, 2, 3)); // 6
console.log('Sum of 5,10:', sum(5, 10));   // 15

// Rest parameters must be the last parameter
function printUserInfo(name, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log('Hobbies:', hobbies);
}

printUserInfo('Bob', 'Reading', 'Gaming', 'Cooking');
// Name: Bob
// Hobbies: [ 'Reading', 'Gaming', 'Cooking' ]
