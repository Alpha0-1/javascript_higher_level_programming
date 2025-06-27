/**
 * Safely prints each element of a list using try/catch
 */

function safePrintList(myList) {
    try {
        for (const item of myList) {
            console.log(item);
        }
    } catch (e) {
        console.error("An error occurred while printing the list.");
    }
}

// Example usage
const sampleList = [1, "two", { three: 3 }, [4]];
safePrintList(sampleList);
