# JavaScript Object-Oriented Programming Tutorial

This repository contains a comprehensive series of JavaScript files designed to teach object-oriented programming concepts through practical examples. The curriculum progresses from basic class definitions to advanced inheritance patterns and algorithmic problem-solving.

## 📚 File Overview

### Core Rectangle Class Evolution

#### `0-rectangle.js` - Basic Rectangle Class
- **Purpose**: Introduction to JavaScript classes and constructors
- **Concepts**: Class definition, constructor parameters, instance methods
- **Methods**: `area()`, `perimeter()`, `isSquare()`
- **Learning Focus**: Understanding the fundamentals of ES6 classes

#### `1-rectangle.js` - Rectangle with Getters and Setters
- **Purpose**: Demonstrates encapsulation and data validation
- **Concepts**: Property accessors, input validation, private properties
- **New Features**: Getter and setter methods for width and height
- **Learning Focus**: Data protection and controlled access to object properties

#### `2-rectangle.js` - Rectangle with String Representation
- **Purpose**: Method overriding and custom object representation
- **Concepts**: `toString()` method override, object description
- **New Methods**: `toString()`, `describe()`
- **Learning Focus**: Customizing how objects are displayed and represented

#### `3-rectangle.js` - Rectangle with Print Method
- **Purpose**: Visual representation and console output
- **Concepts**: Nested loops, console manipulation, visual algorithms
- **New Methods**: `print()`, `printWith(char)`
- **Learning Focus**: Creating visual outputs and working with characters

#### `4-rectangle.js` - Rectangle with Transformations
- **Purpose**: Object manipulation and transformation methods
- **Concepts**: State modification, object scaling, geometric transformations
- **New Methods**: `rotate()`, `double()`, `scale()`, `clone()`
- **Learning Focus**: Modifying object state and creating object copies

### Square Class Inheritance Series

#### `5-square.js` - Basic Square Inheritance
- **Purpose**: Introduction to inheritance with the `extends` keyword
- **Concepts**: Class inheritance, `super()` calls, method overriding
- **Parent Class**: Extends Rectangle from `4-rectangle.js`
- **Learning Focus**: Understanding inheritance relationships and code reuse

#### `6-square.js` - Square with Size Accessors
- **Purpose**: Property accessors in inherited classes
- **Concepts**: Getter/setter inheritance, maintaining class invariants
- **New Features**: `size` getter and setter properties
- **Learning Focus**: Managing specialized properties in child classes

#### `7-square.js` - Square with Custom Print Character
- **Purpose**: Method overriding and parameter handling
- **Concepts**: Optional parameters, method customization
- **New Methods**: Enhanced `print()`, `printHollow()`
- **Learning Focus**: Customizing inherited behavior for specific needs

#### `8-square.js` - Square with Position
- **Purpose**: Coordinate systems and positioned output
- **Concepts**: Object positioning, coordinate management, offset printing
- **New Properties**: `x`, `y` coordinates
- **New Methods**: `setPosition()`, `move()`, positioned printing
- **Learning Focus**: Working with spatial relationships and coordinate systems

#### `9-square.js` - Square Comparison Methods
- **Purpose**: Object comparison and equality testing
- **Concepts**: Comparison operators, static methods, array processing
- **New Methods**: `compareTo()`, `equals()`, `isLargerThan()`, `isSmallerThan()`
- **Static Methods**: `findLargest()`, `findSmallest()`, `sortBySize()`
- **Learning Focus**: Implementing comparison logic and working with object collections

### Advanced Algorithm Implementation

#### `101-nqueens.js` - N-Queens Challenge
- **Purpose**: Advanced algorithmic problem-solving
