# JavaScript Learning Series

This repository contains a series of JavaScript files designed to teach various concepts, from basic object-oriented programming to more advanced data structures and algorithms.

## Files Overview

### Rectangle Series
- `0-rectangle.js`: Basic Rectangle class with area and perimeter.
- `1-rectangle.js`: Adds validation for width and height.
- `2-rectangle.js`: Implements a print method.
- `3-rectangle.js`: Adds rotate and double methods.
- `4-rectangle.js`: Introduces square method and type getter.

### Square Series
- `5-square.js`: Square class inheriting from Rectangle.
- `6-square.js`: Square with char print method.

### Map Series
- `100-map.js`: Simple Map implementation.
- `101-sorted.js`: Sorted Map extension.
- `102-concat.js`: File concatenation function.

### Algorithms
- `103-fibonacci.js`: Fibonacci sequence generator.

## Usage

Each file is self-contained and can be used independently. To use them, simply require or import the necessary files into your JavaScript project.

For example:
```javascript
const Rectangle = require('./0-rectangle.js');
const rect = new Rectangle(5, 10);
console.log(rect.area); // Outputs 50
