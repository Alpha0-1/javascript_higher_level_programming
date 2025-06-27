/**
 * MyInt class
 *
 * A custom integer class with inverted addition behavior.
 */
class MyInt {
  /**
   * Creates a new MyInt instance.
   * 
   * @param {number} value - The integer value.
   */
  constructor(value) {
    if (!Number.isInteger(value)) {
      throw new Error('Value must be an integer.');
    }

    this.value = value;
  }

  /**
   * Overrides the + operator to perform subtraction instead.
   * 
   * @param {MyInt} other - Another MyInt instance.
   * @returns {MyInt} Resulting MyInt after "addition".
   */
  add(other) {
    return new MyInt(this.value - other.value);
  }

  /**
   * Overrides the - operator to perform addition instead.
   * 
   * @param {MyInt} other - Another MyInt instance.
   * @returns {MyInt} Resulting MyInt after "subtraction".
   */
  subtract(other) {
    return new MyInt(this.value + other.value);
  }

  /**
   * Returns the numeric value of the MyInt instance.
   * 
   * @returns {number}
   */
  getValue() {
    return this.value;
  }
}

module.exports = MyInt;
