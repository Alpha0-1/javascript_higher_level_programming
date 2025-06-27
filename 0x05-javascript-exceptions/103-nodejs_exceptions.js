/**
 * 103-nodejs_exceptions.js
 * 
 * Demonstrates Node.js style exception handling:
 * - Uses try/catch for synchronous code
 * - Shows example of handling uncaught exceptions
 * 
 * Betty style doc:
 * @returns {void}
 */

function nodejsExceptionsDemo() {
  // Synchronous try/catch
  try {
    JSON.parse('invalid json');
  } catch (error) {
    console.error('Caught JSON parse error:', error.message);
  }

  // Catching uncaught exceptions globally (example)
  process.on('uncaughtException', (err) => {
    console.error('Uncaught exception caught:', err.message);
  });

  // This will cause an uncaught exception to trigger the above handler
  // setTimeout(() => { throw new Error('This is uncaught!'); }, 1000);
}

// Example usage:
// nodejsExceptionsDemo();

module.exports = nodejsExceptionsDemo;

