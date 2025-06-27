/**
 * Function to find all integers in a list that are multiples of 2.
 * @param {Array<number>} list - Array of integers.
 * @returns {Array<number>} A new array containing only even integers.
 */
function divisible_by_2(list) {
    let result = [];
    for (let num of list) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
