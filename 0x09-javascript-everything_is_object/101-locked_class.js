/**
 * 101-locked_class.js
 *
 * This script demonstrates how to create a class that restricts dynamic property addition,
 * simulating a "locked" class behavior in JavaScript.
 */

class LockedClass {
    constructor(name) {
        this.name = name;

        // Prevent adding new properties dynamically
        Object.seal(this);
    }
}

// Example usage:
const user = new LockedClass('Alice');

user.age = 30; // Will not be added due to Object.seal

console.log(user); // { name: 'Alice' }

// Trying to add a new property will silently fail (in non-strict mode)
console.log('age' in user); // false
