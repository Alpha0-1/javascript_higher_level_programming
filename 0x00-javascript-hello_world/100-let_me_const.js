// Demonstrates the difference between let and const keywords

let variable = 5;     // Variable declared with let can be reassigned
variable = 10;
console.log("Variable value (after change):", variable);

const constant = 20;  // Constant declared with const cannot be reassigned
// constant = 30;  // This will cause an error if uncommented

console.log("Constant value:", constant);
