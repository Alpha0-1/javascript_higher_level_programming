/**
 * Rectangle class with basic properties and methods.
 */
class Rectangle {
    /**
     * Initialize a Rectangle with given width and height.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * Calculate the area of the rectangle.
     * @returns {number} The area.
     */
    get area() {
        return this.width * this.height;
    }

    /**
     * Calculate the perimeter of the rectangle.
     * @returns {number} The perimeter.
     */
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}
