/**
 * tests/test_models/test_base.js - Unit tests for Base class.
 *
 * Uses Node.js assert module to test functionality of the Base class.
 */

const assert = require('assert');
const Base = require('../../models/base');

describe('Base Class Tests', () => {
  it('should create a base instance with an ID', () => {
    const base = new Base(1);
    assert.strictEqual(base.getId(), 1);
  });

  it('should throw error when calling abstract area()', () => {
    const base = new Base(2);
    assert.throws(() => base.area(), Error);
  });
});
