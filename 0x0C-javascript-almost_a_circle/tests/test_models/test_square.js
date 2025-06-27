/**
 * tests/test_models/test_square.js - Unit tests for Square class.
 *
 * Tests Square-specific behaviors and inheritance from Rectangle.
 */

const assert = require('assert');
const Square = require('../../models/square');

describe('Square Class Tests', () => {
  it('should calculate correct area via Rectangle inheritance', () => {
    const square = new Square(1, 5);
    assert.strictEqual(square.area(), 25);
  });

  it('should return Square-specific string representation', () => {
    const square = new Square(3, 7);
    assert.strictEqual(square.toString(), 'Square (ID: 3, Side: 7)');
  });
});
