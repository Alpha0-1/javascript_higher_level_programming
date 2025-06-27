const maxInteger = require('../5-max_integer');

describe('maxInteger', () => {
  test('returns maximum number', () => {
    expect(maxInteger([1, 5, 3, 9, 2])).toBe(9);
  });

  test('returns null for empty list', () => {
    expect(maxInteger([])).toBeNull();
  });

  test('throws if list contains non-numbers', () => {
    expect(() => maxInteger([1, '2', 3])).toThrow(TypeError);
  });

  test('throws if list is not array', () => {
    expect(() => maxInteger('not array')).toThrow(TypeError);
  });
});

