/*
 * Safely divide elements of two lists
 */

function list_division(list1, list2) {
    const result = [];
    try {
        if (!Array.isArray(list1) || !Array.isArray(list2)) {
            throw new TypeError('Both arguments must be arrays');
        }
        for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
            const a = list1[i] || 0;
            const b = list2[i] || 0;
            try {
                if (b === 0) {
                    throw new Error('Division by zero');
                }
                result.push(a / b);
            } catch (error) {
                result.push(NaN);
            }
        }
    } catch (error) {
        console.error('Error:', error.message);
        return [];
    }
    return result;
}

// Example usage:
// const list1 = [10, 20, 30];
// const list2 = [2, 0, 5];
// console.log(list_division(list1, list2)); // Output: [5, NaN, 6]
