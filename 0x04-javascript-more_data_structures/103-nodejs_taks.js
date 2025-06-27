/**
 * Node.js specific tasks related to process arguments.
 * This function prints command-line arguments.
 */
function nodeJSTasks() {
    const args = process.argv.slice(2); // Skip 'node' and script path

    if (args.length === 0) {
        console.log("No argument");
    } else if (args.length === 1) {
        console.log("Argument found");
    } else {
        console.log("Arguments found");
    }
}

module.exports = nodeJSTasks;
