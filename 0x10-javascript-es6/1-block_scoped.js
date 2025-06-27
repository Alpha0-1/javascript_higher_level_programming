// 1-block-scoped.js — Understanding block scoping with let

function example() {
  if (true) {
    var functionScoped = 'I am var'; // Function-scoped
    let blockScoped = 'I am let';   // Block-scoped
  }

  console.log(functionScoped); // Works: var is function-scoped
  // console.log(blockScoped); // Error: let is block-scoped
}

example();
