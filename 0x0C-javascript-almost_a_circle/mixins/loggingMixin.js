/**
 * mixins/loggingMixin.js - Mixin for adding logging functionality.
 *
 * This file exports a mixin function that adds logging behavior to any class.
 * It demonstrates how to use JavaScript classes and factory functions
 * to compose functionality across unrelated classes.
 */

/**
 * Adds logging capability to a base class.
 * @param {Function} BaseClass - The class to extend with logging.
 * @returns {Function} A new class with logging methods.
 */
function Loggable(BaseClass) {
  return class extends BaseClass {
    /**
     * Logs creation event with basic info.
     */
    logCreation() {
      console.log(
        `[LOG] Created instance of ${this.constructor.name} with ID: ${this.getId()}`
      );
    }

    /**
     * Logs additional details about the object.
     */
    logDetails() {
      console.log(`[LOG] Details: ${this.toString()}`);
    }
  };
}

module.exports = { Loggable };
