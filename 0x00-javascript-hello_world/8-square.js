// Demonstrates creating and printing a square pattern using loops

const size = 5; // Size of the square (n x n)

// Create an empty array to hold the square rows
let square = [];

// Build each row of the square
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push('*'); // Add '*' to the row
  }
  square.push(row.join('')); // Join the row array into a string and add to square
}

// Print each row of the square
square.forEach(row => console.log(row));
