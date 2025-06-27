/**
 * MyList class that extends the built-in Array class.
 * This demonstrates inheritance from native JavaScript objects
 * and how to add custom functionality to existing classes.
 */
class MyList extends Array {
  /**
   * Constructor for MyList
   * @param {...any} items - Items to initialize the list with
   */
  constructor(...items) {
    super(...items);
  }

  /**
   * Print all elements in the list to the console
   * Custom method that doesn't exist in the parent Array class
   */
  print() {
    // Iterate through each element and print it
    for (let i = 0; i < this.length; i++) {
      console.log(this[i]);
    }
  }

  /**
   * Get a summary of the list
   * @returns {string} A formatted string describing the list
   */
  getSummary() {
    return `MyList contains ${this.length} item(s): [${this.join(', ')}]`;
  }
}

// Export the class for use in other modules
module.exports = MyList;

// Example usage:
// const myList = new MyList(1, 2, 3, 'hello');
// myList.print(); // Prints each element on a new line
// console.log(myList.getSummary()); // "MyList contains 4 item(s): [1, 2, 3, hello]"
// myList.push('world'); // Can still use Array methods
// console.log(myList.length); // 5
