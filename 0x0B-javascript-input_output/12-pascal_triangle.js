/**
 * Module: PascalTriangle
 * Description: Generates and displays Pascal's Triangle.
 */

/**
 * Function name: generatePascalTriangle
 * Description: Generates Pascal's Triangle up to n rows.
 * @param {number} n - The number of rows for the triangle.
 * @returns {Array<Array<number>>} A 2D array representing Pascal's Triangle.
 */
function generatePascalTriangle(n) {
  if (n <= 0) {
    return [];
  }

  // Initialize triangle with the first row
  const triangle = [[1]];

  // Generate each subsequent row
  for (let i = 1; i < n; i++) {
    const prevRow = triangle[i - 1];
    const currRow = [1]; // First element is always 1

    // Calculate middle elements based on previous row
    for (let j = 1; j < i; j++) {
      currRow[j] = prevRow[j - 1] + prevRow[j];
    }

    currRow.push(1); // Last element is always 1
    triangle.push(currRow);
  }

  return triangle;
}

/**
 * Function name: printPascalTriangle
 * Description: Prints Pascal's Triangle to the console.
 * @param {Array<Array<number>>} triangle - The Pascal's Triangle to print.
 */
function printPascalTriangle(triangle) {
  for (const row of triangle) {
    console.log(row.join(' ').padStart((row.length + 1) * 2 + (triangle.length - row.length)));
  }
}

// Example usage:
if (require.main === module) {
  const numRows = parseInt(process.argv[2]) || 5;
  
  if (numRows <= 0) {
    console.error('Please provide a positive integer for the number of rows.');
    process.exit(1);
  }

  try {
    const triangle = generatePascalTriangle(numRows);
    printPascalTriangle(triangle);
  } catch (error) {
    console.error(`Error generating Pascal's Triangle: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  generatePascalTriangle,
  printPascalTriangle
};
