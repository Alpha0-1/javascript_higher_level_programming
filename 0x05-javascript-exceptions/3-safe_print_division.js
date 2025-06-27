/**
 * Safely performs division and handles division by zero
 */

function safePrintDivision(a, b) {
    try {
        if (b === 0) throw new Error("Cannot divide by zero");
        const result = a / b;
        console.log(`Result: ${result}`);
    } catch (e) {
        console.error(e.message);
    } finally {
        console.log("Inside the finally block");
    }
}

// Example usage
safePrintDivision(10, 2);   // OK
safePrintDivision(10, 0);   // Division by zero
