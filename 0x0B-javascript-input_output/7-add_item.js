/**
 * Module: JsonItemAdder
 * Description: Provides functionality to add an item to a JSON array stored in a file.
 */

const fs = require('fs');
const path = require('path');

/**
 * Function name: addItemToJsonArray
 * Description: Adds an item to an array stored in a JSON file.
 * @param {any} item - The item to add to the array.
 * @param {string} filePath - The path to the JSON file containing the array.
 */
function addItemToJsonArray(item, filePath) {
  try {
    // Check if file exists, create empty array if it doesn't
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }

    // Read current content
    const data = fs.readFileSync(filePath, 'utf8');
    let array = JSON.parse(data);

    // Add item to array
    array.push(item);

    // Write updated array back to file
    fs.writeFileSync(filePath, JSON.stringify(array, null, 2));
    console.log(`Successfully added item to JSON array in file: ${filePath}`);
  } catch (error) {
    throw new Error(`Error adding item to JSON array: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  const filePath = path.join(__dirname, 'items.json');
  const newItem = process.argv[2];

  if (!newItem) {
    console.error('Please provide an item to add as an argument.');
    process.exit(1);
  }

  try {
    addItemToJsonArray(newItem, filePath);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = addItemToJsonArray;
