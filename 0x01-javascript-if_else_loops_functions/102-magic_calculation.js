/**
 * Perform a "magic" calculation
 * Mimics an arbitrary logic (similar to C's `magic_calculation`)
 */

function magicCalculation(x, y) {
  if (x < y) {
    return x + y;
  } else {
    return x * y - x;
  }
}

console.log(magicCalculation(2, 3)); // 5
console.log(magicCalculation(5, 2)); // 5
