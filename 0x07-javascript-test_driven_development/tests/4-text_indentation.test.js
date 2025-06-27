const textIndentation = require('../4-text_indentation');

test('indents text correctly', () => {
  console.log = jest.fn();
  textIndentation('Hello.World? Bye: See you.');
  // Add assertions based on expected printed lines
});
