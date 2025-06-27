/**
 * Import the Rectangle class to use as a base class
 */
const Rectangle = require('./4-rectangle.js');

/**
 * Square class with comparison methods.
 * This file demonstrates object comparison and equality methods.
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
     * Returns a string representation of the square.
     * @return {string} A formatted string describing the square
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
     * Prints the square with position offset.
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

        // Print y-offset
        for (let i = 0; i < this.y; i++) {
            console.log('');
        }

        // Print each row with x-offset
        for (let row = 0; row < this.size; row++) {
            let line = '';
            for (let i = 0; i < this.x; i++) {
                line += ' ';
            }
            for (let col = 0; col < this.size; col++) {
                line += char;
            }
            console.log(line);
        }
    }

    /**
     * Compares this square with another square based on size.
     * @param {Square} otherSquare - The square to compare with
     * @return {number} -1 if this square is smaller, 0 if equal, 1 if larger
     */
    compareTo(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            throw new Error('Can only compare with another Square instance');
        }

        if (this.size < otherSquare.size) return -1;
        if (this.size > otherSquare.size) return 1;
        return 0;
    }

    /**
     * Compares this square with another square based on area.
     * @param {Square} otherSquare - The square to compare with
     * @return {number} -1 if this square has smaller area, 0 if equal, 1 if larger
     */
    compareByArea(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            throw new Error('Can only compare with another Square instance');
        }

        const thisArea = this.area();
        const otherArea = otherSquare.area();

        if (thisArea < otherArea) return -1;
        if (thisArea > otherArea) return 1;
        return 0;
    }

    /**
     * Checks if this square is equal to another square in size.
     * @param {Square} otherSquare - The square to compare with
     * @return {boolean} True if squares have the same size, false otherwise
     */
    equals(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            return false;
        }
        return this.size === otherSquare.size;
    }

    /**
     * Checks if this square is identical to another square (same size and position).
     * @param {Square} otherSquare - The square to compare with
     * @return {boolean} True if squares are identical, false otherwise
     */
    isIdentical(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            return false;
        }
        return this.size === otherSquare.size && 
               this.x === otherSquare.x && 
               this.y === otherSquare.y;
    }

    /**
     * Checks if this square is larger than another square.
     * @param {Square} otherSquare - The square to compare with
     * @return {boolean} True if this square is larger, false otherwise
     */
    isLargerThan(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            throw new Error('Can only compare with another Square instance');
        }
        return this.size > otherSquare.size;
    }

    /**
     * Checks if this square is smaller than another square.
     * @param {Square} otherSquare - The square to compare with
     * @return {boolean} True if this square is smaller, false otherwise
     */
    isSmallerThan(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            throw new Error('Can only compare with another Square instance');
        }
        return this.size < otherSquare.size;
    }

    /**
     * Finds the largest square from an array of squares.
     * @param {Square[]} squares - Array of Square instances
     * @return {Square|null} The largest square, or null if array is empty
     */
    static findLargest(squares) {
        if (!Array.isArray(squares) || squares.length === 0) {
            return null;
        }

        // Validate all elements are Square instances
        for (const square of squares) {
            if (!(square instanceof Square)) {
                throw new Error('All elements must be Square instances');
            }
        }

        return squares.reduce((largest, current) => {
            return current.isLargerThan(largest) ? current : largest;
        });
    }

    /**
     * Finds the smallest square from an array of squares.
     * @param {Square[]} squares - Array of Square instances
     * @return {Square|null} The smallest square, or null if array is empty
     */
    static findSmallest(squares) {
        if (!Array.isArray(squares) || squares.length === 0) {
            return null;
        }

        // Validate all elements are Square instances
        for (const square of squares) {
            if (!(square instanceof Square)) {
                throw new Error('All elements must be Square instances');
            }
        }

        return squares.reduce((smallest, current) => {
            return current.isSmallerThan(smallest) ? current : smallest;
        });
    }

    /**
     * Sorts an array of squares by size in ascending order.
     * @param {Square[]} squares - Array of Square instances to sort
     * @return {Square[]} A new sorted array of squares
     */
    static sortBySize(squares) {
        if (!Array.isArray(squares)) {
            throw new Error('Input must be an array of Square instances');
        }

        // Validate all elements are Square instances
        for (const square of squares) {
            if (!(square instanceof Square)) {
                throw new Error('All elements must be Square instances');
            }
        }

        // Create a copy and sort it
        return [...squares].sort((a, b) => a.compareTo(b));
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
     * @return {Square} A new Square instance with the same properties
     */
    clone() {
        return new Square(this.size, this.x, this.y);
    }
}

// Export the Square class for use in other modules
module.exports = Square;
