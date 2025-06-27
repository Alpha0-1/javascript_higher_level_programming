/**
 * Import the Rectangle class to use as a base class
 */
const Rectangle = require('./4-rectangle.js');

/**
 * Square class that inherits from Rectangle.
 * This file demonstrates inheritance and the extends keyword.
 * @class Square
 * @extends Rectangle
 */
class Square extends Rectangle {
    /**
     * Creates a new Square instance.
     * Since a square has equal width and height, we only need one size parameter.
     * @param {number} size - The size (width and height) of the square
     */
    constructor(size) {
        // Call the parent constructor with size for both width and height
        super(size, size);
        
        // Store the size for easier access
        this.size = size;
    }

    /**
     * Gets the size of the square.
     * @return {number} The size of the square
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets the size of the square.
     * This method updates both width and height to maintain square properties.
     * @param {number} newSize - The new size for the square
     */
    setSize(newSize) {
        if (typeof newSize !== 'number' || newSize <= 0) {
            throw new Error('Size must be a positive number');
        }
        
        // Update the size property
        this.size = newSize;
        
        // Update inherited width and height properties
        this.width = newSize;
        this.height = newSize;
    }

    /**
     * Returns a string representation of the square.
     * Overrides the parent toString method to provide square-specific output.
     * @return {string} A formatted string describing the square
     */
    toString() {
        return `Square(${this.size}x${this.size})`;
    }

    /**
     * Calculates the area of the square.
     * While we could use the inherited area() method, this demonstrates method overriding.
     * @return {number} The area of the square (size * size)
     */
    area() {
        return this.size * this.size;
    }

    /**
     * Calculates the perimeter of the square.
     * Demonstrates method overriding with square-specific logic.
     * @return {number} The perimeter of the square (4 * size)
     */
    perimeter() {
        return 4 * this.size;
    }

    /**
     * Override the rotate method since rotating a square doesn't change its appearance.
     * This demonstrates how child classes can modify parent behavior.
     */
    rotate() {
        console.log(`Square rotation: ${this.toString()} (no visual change)`);
    }

    /**
     * Override the double method to maintain square properties.
     */
    double() {
        const originalSize = this.size;
        this.setSize(this.size * 2);
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
