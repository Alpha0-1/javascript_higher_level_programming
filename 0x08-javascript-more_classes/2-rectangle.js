/**
 * Class representing a rectangle with properties and methods.
 * @class
 */
class Rectangle {
    constructor(width = 1, height = 1) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Width must be a positive number');
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Height must be a positive number');
        }
        this._height = value;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    /**
     * Returns a string representation of the rectangle.
     * @return {string} String representation of the rectangle's properties.
     */
    toString() {
        return `Rectangle: width=${this.width}, height=${this.height}, area=${this.getArea()}, perimeter=${this.getPerimeter()}`;
    }
}
