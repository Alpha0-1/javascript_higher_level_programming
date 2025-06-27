/**
 * Safely prints a value if it is an integer
 */

function safePrintInteger(value) {
    try {
        if (Number.isInteger(value)) {
            console.log(value);
        } else {
            console.warn("Value is not an integer.");
        }
    } catch (e) {
        console.error("An unexpected error occurred.");
    }
}

// Example usage
safePrintInteger(42);       // Valid
safePrintInteger("42");     // Not an integer
safePrintInteger(3.14);     // Not an integer
