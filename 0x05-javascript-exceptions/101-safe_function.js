/**
 * Executes a function safely and returns undefined on error
 */

function safeFunction(func) {
    return function (...args) {
        try {
            return func(...args);
        } catch (e) {
            console.error("Function failed:", e.message);
            return undefined;
        }
    };
}

// Example usage
const safeSquare = safeFunction((x) => x * x);

console.log(safeSquare(5));     // 25
console.log(safeSquare("a"));   // Function failed: ...
