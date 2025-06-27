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

    toString() {
        return `Rectangle: width=${this.width}, height=${this.height}, area=${this.getArea()}, perimeter=${this.getPerimeter()}`;
    }

    /**
     * Prints a visual representation of the rectangle using asterisks (*) in the console.
     */
    print() {
        if (this.width <= 0 || this.height <= 0) {
            console.log('Invalid rectangle dimensions');
            return;
        }

        console.log('*'.repeat(this.width));
        for (let i = 1; i < this.height - 1; i++) {
            console.log('*' + ' '.repeat(this.width - 2) + '*');
        }
        if (this.height > 1) {
            console.log('*'.repeat(this.width));
        }
    }
}
