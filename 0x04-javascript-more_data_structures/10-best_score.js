/**
 * Function to find the highest score in an object of scores.
 * @param {Object} grades - Dictionary of names and scores.
 * @returns {string|null} Name of the person with the highest score, or null.
 */
function bestScore(grades) {
    let maxName = null;
    let maxScore = -Infinity;

    for (const name in grades) {
        if (grades[name] > maxScore) {
            maxScore = grades[name];
            maxName = name;
        }
    }

    return maxName;
}

module.exports = bestScore;
