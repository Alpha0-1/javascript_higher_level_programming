const printSquare = require('../3-print_square');

test('prints correct square output', () => {
  console.log = jest.fn();
  printSquare(3);
  expect(console.log).toHaveBeenCalledWith('###');
  expect(console.log).toHaveBeenCalledTimes(3);
});
