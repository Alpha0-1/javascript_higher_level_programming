# 0x09 Everything Is Object in JavaScript

This project explores fundamental JavaScript concepts related to objects, mutability, references, and built-in behaviors.

## Learning Objectives

After completing this section, students should understand:

- How JavaScript treats everything as if it were an object
- Primitive vs Reference types
- Mutability of data structures
- Deep vs Shallow copying
- Function and method assignment
- Prototype-based inheritance
- Memory management basics

## Files

| File | Description |
|------|-------------|
| `*.txt` | Short conceptual answers |
| `19-copy_list.js` | Create a shallow copy of an array |
| `100-magic_string.js` | Generate a string that changes on each call |
| `101-locked_class.js` | Create a class that prevents dynamic property addition |

## Usage

Each `.js` file exports or demonstrates specific functionality relevant to object-oriented JavaScript. You can run these using Node.js or in a browser environment.

## Notes

- Functions are first-class citizens in JavaScript.
- Objects and arrays are passed by reference.
- Use `JSON.parse(JSON.stringify(obj))` for quick deep cloning (with caveats).
- JavaScript does not have a native `tuple` type.
