/**
 * Function to delete a key from a dictionary if it exists.
 * @param {Object} aDictionary - Input object.
 * @param {*} key - Key to delete.
 * @returns {Object} Copy of the updated dictionary.
 */
function complexDelete(aDictionary, key) {
    const copy = {...aDictionary};
    delete copy[key];
    return copy;
}

module.exports = complexDelete;
