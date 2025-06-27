/**
 * Prints the provided first and last name.
 *
 * @param {string} firstName - First name
 * @param {string} [lastName] - Last name (optional)
 */
function sayMyName(firstName, lastName) {
  if (typeof firstName !== 'string') {
    throw new TypeError('first_name must be a string');
  }

  if (lastName !== undefined && typeof lastName !== 'string') {
    throw new TypeError('last_name must be a string');
  }

  console.log(`My name is ${firstName}${lastName ? ' ' + lastName : ''}`);
}

module.exports = sayMyName;
