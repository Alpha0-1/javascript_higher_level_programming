/**
 * Prints text with indentation after ., ?, :
 *
 * @param {string} text - Input text
 */
function textIndentation(text) {
  if (typeof text !== 'string') {
    throw new TypeError('text must be a string');
  }

  const separators = ['.', '?', ':'];
  let result = '';
  let prevChar = '';

  for (const char of text.trim()) {
    result += char;

    if (separators.includes(prevChar)) {
      if (char === ' ') {
        result += '\n\n';
      } else {
        result += '\n\n' + char;
      }
    }

    prevChar = char;
  }

  console.log(result.replace(/([.?:])\s*/g, '$1\n\n'));
}

module.exports = textIndentation;
