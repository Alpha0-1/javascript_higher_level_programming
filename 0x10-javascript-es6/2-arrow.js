// 2-arrow.js — Introduction to arrow functions

// Traditional function expression
const square = function(x) {
  return x * x;
};

// Same as above using arrow function
const arrowSquare = x => x * x;

console.log('Traditional square:', square(5));     // 25
console.log('Arrow function square:', arrowSquare(5)); // 25

// Arrow functions do not bind their own `this`
const obj = {
  value: 10,
  traditionalFunc: function() {
    setTimeout(function() {
      // `this.value` is undefined here
      console.log('Traditional this.value:', this?.value);
    }, 100);
  },
  arrowFunc: function() {
    setTimeout(() => {
      // `this` refers to the enclosing context (`obj`)
      console.log('Arrow this.value:', this.value);
    }, 100);
  }
};

obj.traditionalFunc(); // Logs undefined
obj.arrowFunc();       // Logs 10
