/**
 * MyInt class that extends Number and "rebels" by inverting equality operations.
 * This class demonstrates method overriding in an unconventional way,
 * showing how inheritance can be used to create unexpected behaviors.
 */
class MyInt extends Number {
  /**
   * Constructor for MyInt
   * @param {number} value - The numeric value for this integer
   */
  constructor(value) {
    // Call the parent Number constructor
    super(value);
    
    // Store the original value
    this._value = parseInt(value);
  }

  /**
   * Get the actual numeric value
   * @returns {number} The stored integer value
   */
  valueOf() {
    return this._value;
  }

  /**
   * Override the equality check - this is where the "rebellion" happens!
   * Instead of returning true when values are equal, it returns false,
   * and vice versa. This demonstrates how method overriding can create
   * unexpected behaviors.
   * 
   * @param {*} other - The value to compare with
   * @returns {boolean} The inverted equality result
   */
  equals(other) {
    // Convert other to number if it's not already
    const otherValue = typeof other === 'number' ? other : Number(other);
    
    // Return the OPPOSITE of normal equality!
    // If values are equal, return false (rebellion!)
    // If values are different, return true
    return this._value !== otherValue;
  }

  /**
   * Override toString to show the rebellious nature
   * @returns {string} String representation of the rebellious integer
   */
  toString() {
    return `MyInt(${this._value}) - I rebel against equality!`;
  }

  /**
   * Get the actual value without rebellion
   * @returns {number} The true numeric value
   */
  getTrueValue() {
    return this._value;
  }

  /**
   * Demonstrate the rebellious behavior
   * @param {number} compareValue - Value to compare against
   * @returns {string} Explanation of the rebellious behavior
   */
  demonstrateRebellion(compareValue) {
    const normalEquality = this._value === compareValue;
    const rebelliousEquality = this.equals(compareValue);
    
    return `Comparing ${this._value} with ${compareValue}:
  Normal equality: ${normalEquality}
  Rebellious equality: ${rebelliousEquality}
  The rebellion inverts the result!`;
  }

  /**
   * Check if this MyInt is numerically equal to another value
   * (This provides a way to check true equality despite the rebellion)
   * 
   * @param {*} other - The value to compare with
   * @returns {boolean} True mathematical equality
   */
  isTrulyEqualTo(other) {
    const otherValue = typeof other === 'number' ? other : Number(other);
    return this._value === otherValue;
  }
}

// Export the class for use in other modules
module.exports = MyInt;

// Example usage demonstrating the rebellious behavior:
// const rebel1 = new MyInt(5);
// const rebel2 = new MyInt(5);
// const rebel3 = new MyInt(10);
// 
// console.log(rebel1.toString()); // 'MyInt(5) - I rebel against equality!'
// 
// // Normal equality would expect these to be true, but MyInt rebels!
// console.log(rebel1.equals(5)); // false (rebellion - they ARE equal!)
// console.log(rebel1.equals(rebel2.getTrueValue())); // false (rebellion!)
// console.log(rebel1.equals(10)); // true (rebellion - they are NOT equal!)
// 
// // Demonstrate the rebellion
// console.log(rebel1.demonstrateRebellion(5));
// console.log(rebel1.demonstrateRebellion(10));
// 
// // Use the non-rebellious method for true comparison
// console.log(rebel1.isTrulyEqualTo(5)); // true (honest equality)
// console.log(rebel1.isTrulyEqualTo(10)); // false (honest equality)
