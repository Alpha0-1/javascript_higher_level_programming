/**
 * Raises an exception with a custom message
 */

function raiseExceptionWithMessage(message) {
    throw new Error(message);
}

try {
    raiseExceptionWithMessage("This is a custom error message!");
} catch (e) {
    console.error("Caught an error:", e.message);
}
