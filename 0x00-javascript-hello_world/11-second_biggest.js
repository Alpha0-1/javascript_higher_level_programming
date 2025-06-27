// Demonstrates finding the second largest number in an array

function findSecondLargest(numbers) {
  if (numbers.length < 2) {
    throw new Error("Array must contain at least 2 numbers.");
  }

  // Sort the array in descending order
  const sorted = [...numbers].sort((a, b) => b - a);

  // Get the second highest number (index 1)
  return sorted[1];
}

// Example usage
const data = [3, 5, 1, 8, 2, 5, 9];
console.log("The second largest number is:", findSecondLargest(data));
