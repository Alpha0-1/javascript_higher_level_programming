/**
 * Prints only integers from a list safely
 */

function safePrintListIntegers(myList) {
    try {
        for (const item of myList) {
            if (Number.isInteger(item)) {
                console.log(item);
            }
        }
    } catch (e) {
        console.error("Error while processing list.");
    }
}

// Example usage
const mixedList = [1, "two", 3, null, 5.5, 7];
safePrintListIntegers(mixedList);
