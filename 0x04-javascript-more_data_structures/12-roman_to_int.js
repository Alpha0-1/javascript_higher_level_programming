/**
 * Function to convert a Roman numeral string to an integer.
 * @param {string} romanString - Roman numeral string.
 * @returns {number} Integer representation.
 */
function romanToInt(romanString) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = romanString.length - 1; i >= 0; i--) {
        const currentValue = romanMap[romanString[i]];
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
}

module.exports = romanToInt;
