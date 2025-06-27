/**
 * Import the Rectangle class to use as a base class
 */
const Rectangle = require('./4-rectangle.js');

/**
 * Square class with customizable print character.
 * This file demonstrates method overriding and parameter handling.
 * @class Square
 * @extends Rectangle
 */
class Square extends Rectangle {
    /**
     * Creates a new Square instance.
     * @param {number} size - The size (width and height) of the square
     */
    constructor(size) {
        super(size, size);
    }

    /**
     * Gets the size of the square.
     * @return {number} The size of the square
     */
    get size() {
        return this.width;
    }

    /**
     * Sets the size of the square.
     * @param {number} value - The new size for the square
     */
    set size(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Size must be a positive number');
        }
        this.width = value;
        this.height = value;
    }

    /**
     * Returns a string representation of the square.
     * @return {string} A formatted string describing the square
     */
    toString() {
        return `Square(${this.size}x${this.size})`;
    }

    /**
     * Calculates the area of the square.
     * @return {number} The area of the square (size * size)
     */
    area() {
        return this.size * this.size;
    }

    /**
     * Calculates the perimeter of the square.
     * @return {number} The perimeter of the square (4 * size)
     */
    perimeter() {
        return 4 * this.size;
    }

    /**
     * Prints a visual representation of the square.
     * If no character is provided, uses 'X' as default.
     * If character is provided, uses that character for printing.
     * @param {string} [char] - The character to use for printing (optional)
     */
    print(char) {
        // Handle edge case where size might be 0
        if (this.size === 0) {
            console.log('Cannot print square with zero size');
            return;
        }

        // Determine which character to use
        let printChar;
        if (char === undefined) {
            // No argument provided, use default 'X'
            printChar = 'X';
        } else {
            // Character provided, validate it
            if (typeof char !== 'string' || char.length !== 1) {
                throw new Error('Print character must be a single string character');
            }
            printChar = char;
        }

        // Print each row of the square
        for (let row = 0; row < this.size; row++) {
            let line = '';
            // Build each column of the current row
            for (let col = 0; col < this.size; col++) {
                line += printChar;
            }
            console.log(line);
        }
    }

    /**
     * Prints a hollow square using the specified character.
     * This method creates a border effect by only printing characters on the edges.
     * @param {string} [char='X'] - The character to use for printing
     */
    printHollow(char = 'X') {
        if (typeof char !== 'string' || char.length !== 1) {
            throw new Error('Print character must be a single string character');
        }

        if (this.size === 0) {
            console.log('Cannot print square with zero size');
            return;
        }

        if (this.size === 1) {
            // Special case: 1x1 square is just one character
            console.log(char);
            return;
        }

        // Print each row
        for (let row = 0; row < this.size; row++) {
            let line = '';
            
            for (let col = 0; col < this.size; col++) {
                // Print character only on the border (first/last row or first/last column)
                if (row === 0 || row === this.size - 1 || col === 0 || col === this.size - 1) {
                    line += char;
                } else {
                    line += ' ';
                }
            }
            console.log(line);
        }
    }

    /**
     * Override the rotate method for squares.
     */
    rotate() {
        console.log(`Square rotation: ${this.toString()} (no visual change)`);
    }

    /**
     * Override the double method.
     */
    double() {
        const originalSize = this.size;
        this.size *= 2;
        console.log(`Square doubled from ${originalSize}x${originalSize} to ${this.size}x${this.size}`);
    }

    /**
     * Creates a copy of the current square.
     * @return {Square} A new Square instance with the same size
     */
    clone() {
        return new Square(this.size);
    }
}

// Export the Square class for use in other modules
module.exports = Square;
