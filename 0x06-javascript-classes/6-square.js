/**
 * Square class
 *
 * Extends the Rectangle class and adds custom character printing.
 */
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  /**
   * Creates a new Square instance.
   * 
   * @param {number} size - The side length of the square.
   */
  constructor(size) {
    super(size, size);
  }

  /**
   * Prints the square using a specified character.
   * 
   * @param {string} c - Character used to print the square.
   */
  charPrint(c) {
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
