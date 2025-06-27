// Demonstrates conditional function execution

function maybeAdd(a, b, shouldAdd) {
  if (shouldAdd) {
    return a + b;
  } else {
    return undefined;
  }
}

// Example usage
console.log("Add 3 and 5?:", maybeAdd(3, 5, true));
console.log("Add 10 and 20?:", maybeAdd(10, 20, false));
