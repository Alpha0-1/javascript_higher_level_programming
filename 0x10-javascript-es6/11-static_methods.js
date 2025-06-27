// 11-static-methods.js — Using static methods in classes

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log('Static add:', MathUtils.add(5, 3));      // 8
console.log('Static multiply:', MathUtils.multiply(5, 3)); // 15

// Static methods are not available on instances
const utils = new MathUtils();
// utils.add(2, 3); // This will throw an error
