/**
 * Prints all elements of the list in reverse order, one per line.
 * @param {Array<any>} list - The list to print in reverse.
 */
function print_reversed_list(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    }
}

module.exports = print_reversed_list;

