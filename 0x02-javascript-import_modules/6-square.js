/**
 * 6-square.js - Extends Square to print using a custom character.
 */

const Square = require('./5-square');

class CharSquare extends Square {
  /**
   * Creates a square with a custom print character.
   * @constructor
   * @param {number} size - The side length of the square.
   * @param {string} char - Character used for printing.
   */
  constructor(size, char = '#') {
    super(size);
    this.char = char;
  }

  /**
   * Prints the square using the specified character.
   */
  print() {
    const row = this.char.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}

module.exports = CharSquare;
