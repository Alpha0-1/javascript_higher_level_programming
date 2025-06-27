const addInteger = require('../0-add_integer');

test('adds two integers correctly', () => {
  expect(addInteger(1, 2)).toBe(3);
});

test('uses default second argument', () => {
  expect(addInteger(1)).toBe(99);
});

test('throws error on non-number input', () => {
  expect(() => addInteger('a', 2)).toThrow();
});
