/**
 * Prints integers and logs errors to stderr
 */

function safePrintIntegerErr(value) {
    try {
        if (Number.isInteger(value)) {
            console.log(value);
        } else {
            process.stderr.write("Value is not an integer.\n");
        }
    } catch (e) {
        process.stderr.write(`Unexpected error: ${e.message}\n`);
    }
}

// Example usage (Node.js)
if (typeof process !== 'undefined' && process.versions?.node) {
    safePrintIntegerErr(42);     // Valid
    safePrintIntegerErr("42");   // Not an integer
    safePrintIntegerErr(null);   // Not an integer
}
