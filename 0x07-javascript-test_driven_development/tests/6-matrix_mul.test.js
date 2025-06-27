const matrixMul = require('../6-matrix_mul');

test('multiplies matrices correctly', () => {
  const m1 = [[1, 2], [3, 4]];
  const m2 = [[2, 0], [1, 2]];
  expect(matrixMul(m1, m2)).toEqual([[4, 4], [10, 8]]);
});
