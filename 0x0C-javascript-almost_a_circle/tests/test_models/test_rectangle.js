/**
 * tests/test_models/test_rectangle.js - Unit tests for Rectangle class.
 *
 * Uses Node.js assert module to test Rectangle behavior.
 */

const assert = require('assert');
const Rectangle = require('../../models/rectangle');

describe('Rectangle Class Tests', () => {
  it('should calculate correct area', () => {
    const rect = new Rectangle(1, 5, 3);
    assert.strictEqual(rect.area(), 15);
  });

  it('should return proper string representation', () => {
    const rect = new Rectangle(2, 4, 6);
    assert.strictEqual(rect.toString(), 'Rectangle (ID: 2, Width: 4, Height: 6)');
  });
});
