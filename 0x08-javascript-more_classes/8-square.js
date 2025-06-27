/**
 * Import the Rectangle class to use as a base class
 */
const Rectangle = require('./4-rectangle.js');

/**
 * Square class with position-based printing capability.
 * This file demonstrates coordinate systems and positioned output.
 * @class Square
 * @extends Rectangle
 */
class Square extends Rectangle {
    /**
     * Creates a new Square instance.
     * @param {number} size - The size (width and height) of the square
     * @param {number} [x=0] - The x-coordinate position of the square
     * @param {number} [y=0] - The y-coordinate position of the square
     */
    constructor(size, x = 0, y = 0) {
        super(size, size);
        
        // Initialize position properties
        this.x = x;
        this.y = y;
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
     * Gets the x-coordinate of the square.
     * @return {number} The x-coordinate
     */
    getX() {
        return this.x;
    }

    /**
     * Gets the y-coordinate of the square.
     * @return {number} The y-coordinate
     */
    getY() {
        return this.y;
    }

    /**
     * Sets the position of the square.
     * @param {number} x - The new x-coordinate
     * @param {number} y - The new y-coordinate
     */
    setPosition(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('Position coordinates must be numbers');
        }
        if (x < 0 || y < 0) {
            throw new Error('Position coordinates must be non-negative');
        }
        
        this.x = x;
        this.y = y;
    }

    /**
     * Returns a string representation of the square including its position.
     * @return {string} A formatted string describing the square and its position
     */
    toString() {
        return `Square(${this.size}x${this.size}) at position (${this.x}, ${this.y})`;
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
     * Prints a visual representation of the square with position offset.
     * The square is printed with leading spaces based on its x,y position.
     * @param {string} [char='X'] - The character to use for printing
     */
    print(char = 'X') {
        if (typeof char !== 'string' || char.length !== 1) {
            throw new Error('Print character must be a single string character');
        }

        if (this.size === 0) {
            console.log('Cannot print square with zero size');
            return;
        }

        // Print y-offset (empty lines above the square)
        for (let i = 0; i < this.y; i++) {
            console.log('');
        }

        // Print each row of the square with x-offset
        for (let row = 0; row < this.size; row++) {
            let line = '';
            
            // Add x-offset (spaces before the square)
            for (let i = 0; i < this.x; i++) {
                line += ' ';
            }
            
            // Add the square characters
            for (let col = 0; col < this.size; col++) {
                line += char;
            }
            
            console.log(line);
        }
    }

    /**
     * Prints a hollow square with position offset.
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

        // Print y-offset (empty lines above the square)
        for (let i = 0; i < this.y; i++) {
            console.log('');
        }

        if (this.size === 1) {
            // Special case: 1x1 square
            let line = '';
            for (let i = 0; i < this.x; i++) {
                line += ' ';
            }
            line += char;
            console.log(line);
            return;
        }

        // Print each row of the hollow square with x-offset
        for (let row = 0; row < this.size; row++) {
            let line = '';
            
            // Add x-offset (spaces before the square)
            for (let i = 0; i < this.x; i++) {
                line += ' ';
            }
            
            // Add the square characters (hollow)
            for (let col = 0; col < this.size; col++) {
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
     * Moves the square by the specified offset.
     * @param {number} deltaX - The change in x-coordinate
     * @param {number} deltaY - The change in y-coordinate
     */
    move(deltaX, deltaY) {
        if (typeof deltaX !== 'number' || typeof deltaY !== 'number') {
            throw new Error('Movement deltas must be numbers');
        }
        
        const newX = this.x + deltaX;
        const newY = this.y + deltaY;
        
        if (newX < 0 || newY < 0) {
            throw new Error('Cannot move square to negative coordinates');
        }
        
        this.x = newX;
        this.y = newY;
        
        console.log(`Square moved to position (${this.x}, ${this.y})`);
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
        console.log(`Square doubled from ${originalSize}x${originalSize} to ${this.size}x${this.size} at position (${this.x}, ${this.y})`);
    }

    /**
     * Creates a copy of the current square including its position.
     * @return {Square} A new Square instance with the same size and position
     */
    clone() {
        return new Square(this.size, this.x, this.y);
    }
}

// Export the Square class for use in other modules
module.exports = Square;
