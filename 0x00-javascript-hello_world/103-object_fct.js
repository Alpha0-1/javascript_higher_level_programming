// Demonstrates creating and using an object method

// Create an object with properties and a method
const counter = {
  value: 0,         // Initial value
  increment: function() { // Method to increment the value
    this.value++;    // this refers to the object
  }
};

// Call the increment method
counter.increment();
counter.increment();
counter.increment();

// Print the updated value
console.log("Counter value after 3 increments:", counter.value);
