const sayMyName = require('../2-say_my_name');

test('prints full name', () => {
  console.log = jest.fn();
  sayMyName('John', 'Doe');
  expect(console.log).toHaveBeenCalledWith('My name is John Doe');
});

test('prints only first name', () => {
  console.log = jest.fn();
  sayMyName('Alice');
  expect(console.log).toHaveBeenCalledWith('My name is Alice');
});
