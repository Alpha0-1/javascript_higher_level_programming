/**
 * Import the Rectangle class to use as a base class
 */
const Rectangle = require('./4-rectangle.js');

/**
 * Square class with size getter and setter properties.
 * This file demonstrates property accessors in inheritance.
 * @class Square
 * @extends Rectangle
 */
class Square extends Rectangle {
    /**
     * Creates a new Square instance.
     * @param {number} size - The size (width and height) of the square
     */
    constructor(size) {
        // Call the parent constructor with size for both dimensions
        super(size, size);
    }

    /**
     * Gets the size of the square.
     * This getter provides a convenient way to access the square's dimension.
     * @return {number} The size of the square
     */
    get size() {
        // Since it's a square, width and height are always equal
        return this.width;
    }

    /**
     * Sets the size of the square.
     * This setter ensures both width and height are updated simultaneously.
     * @param {number} value - The new size for the square
     */
    set size(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Size must be a positive number');
        }
        
        // Update both width and height to maintain square properties
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
     * Calculates the area of the square using the size property.
     * @return {number} The area of the square (size * size)
     */
    area() {
        return this.size * this.size;
    }

    /**
     * Calculates the perimeter of the square using the size property.
     * @return {number} The perimeter of the square (4 * size)
     */
    perimeter() {
        return 4 * this.size;
    }

    /**
     * Override the rotate method for squares.
     * Since squares look the same after rotation, we just log the action.
     */
    rotate() {
        console.log(`Square rotation: ${this.toString()} (no visual change)`);
    }

    /**
     * Override the double method using the size setter.
     */
    double() {
        const originalSize = this.size;
        this.size *= 2;
        console.log(`Square doubled from ${originalSize}x${originalSize} to ${this.size}x${this.size}`);
    }

    /**
     * Scales the square by a given factor using the size property.
     * @param {number} factor - The scaling factor (must be positive)
     */
    scale(factor) {
        if (typeof factor !== 'number' || factor <= 0) {
            throw new Error('Scale factor must be a positive number');
        }
        
        const originalSize = this.size;
        this.size *= factor;
        
        console.log(`Square scaled by ${factor}x from ${originalSize}x${originalSize} to ${this.size}x${this.size}`);
    }

    /**
     * Creates a copy of the current square.
     * @return {Square} A new Square instance with the same size
     */
    clone() {
        return new Square(this.size);
    }

    /**
     * Compares this square with another square based on area.
     * @param {Square} otherSquare - The square to compare with
     * @return {number} -1 if smaller, 0 if equal, 1 if larger
     */
    compareTo(otherSquare) {
        if (!(otherSquare instanceof Square)) {
            throw new Error('Can only compare with another Square instance');
        }
        
        const thisArea = this.area();
        const otherArea = otherSquare.area();
        
        if (thisArea < otherArea) return -1;
        if (thisArea > otherArea) return 1;
        return 0;
    }
}

// Export the Square class for use in other modules
module.exports = Square;
