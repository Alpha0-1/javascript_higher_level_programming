/**
 * Class representing a rectangle with properties and methods.
 * @class
 */
class Rectangle {
    /**
     * Constructs a rectangle with given width and height.
     * @param {number} [width=1] - The width of the rectangle.
     * @param {number} [height=1] - The height of the rectangle.
     */
    constructor(width = 1, height = 1) {
        this._width = width;
        this._height = height;
    }

    /**
     * Gets the width of the rectangle.
     * @return {number} The width of the rectangle.
     */
    get width() {
        return this._width;
    }

    /**
     * Sets the width of the rectangle.
     * @param {number} value - The new width value.
     */
    set width(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Width must be a positive number');
        }
        this._width = value;
    }

    /**
     * Gets the height of the rectangle.
     * @return {number} The height of the rectangle.
     */
    get height() {
        return this._height;
    }

    /**
     * Sets the height of the rectangle.
     * @param {number} value - The new height value.
     */
    set height(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Height must be a positive number');
        }
        this._height = value;
    }

    /**
     * Calculates and returns the area of the rectangle.
     * @return {number} The area of the rectangle.
     */
    getArea() {
        return this.width * this.height;
    }

    /**
     * Calculates and returns the perimeter of the rectangle.
     * @return {number} The perimeter of the rectangle.
     */
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
