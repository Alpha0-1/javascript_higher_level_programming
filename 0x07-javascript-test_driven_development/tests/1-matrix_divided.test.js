const matrixDivided = require('../1-matrix_divided');

test('divides matrix correctly', () => {
  const matrix = [[4, 8], [12, 16]];
  expect(matrixDivided(matrix, 2)).toEqual([[2, 4], [6, 8]]);
});

test('throws error on invalid divisor', () => {
  expect(() => matrixDivided([[4]][[8]], 'a')).toThrow();
});
