/**
 * Function to calculate the weighted average of a list of [score, weight] tuples.
 * @param {Array<Array<number>>} gwList - List of [score, weight].
 * @returns {number} Weighted average or 0 if empty.
 */
function weightAverage(gwList) {
    if (gwList.length === 0) return 0;

    const [totalScore, totalWeight] = gwList.reduce(
        ([sumScore, sumWeight], [score, weight]) => [
            sumScore + score * weight,
            sumWeight + weight
        ],
        [0, 0]
    );

    return totalScore / totalWeight;
}

module.exports = weightAverage;
