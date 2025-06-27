/**
 * Function to sum unique integers in an array.
 * @param {Array<number>} myArray - An array of integers.
 * @returns {number} Sum of unique elements.
 */
function uniqAdd(myArray) {
    const uniqueNumbers = [...new Set(myArray)];
    return uniqueNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = uniqAdd;
