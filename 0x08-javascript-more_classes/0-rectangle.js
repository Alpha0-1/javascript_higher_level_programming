/**
 * Class representing a rectangle with basic properties and methods.
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
    getWidth() {
        return this._width;
    }

    /**
     * Gets the height of the rectangle.
     * @return {number} The height of the rectangle.
     */
    getHeight() {
        return this._height;
    }

    /**
     * Calculates and returns the area of the rectangle.
     * @return {number} The area of the rectangle.
     */
    getArea() {
        return this._width * this._height;
    }

    /**
     * Calculates and returns the perimeter of the rectangle.
     * @return {number} The perimeter of the rectangle.
     */
    getPerimeter() {
        return 2 * (this._width + this._height);
    }
}
