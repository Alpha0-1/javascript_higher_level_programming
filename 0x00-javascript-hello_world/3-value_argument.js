// 3-value_argument.js
// Demonstrates checking for the presence of command line arguments

const args = process.argv.slice(2); // Get arguments excluding the node and filename

if (args.length > 0) {
  console.log("You provided arguments:", args.join(", "));
} else {
  console.log("No arguments provided. Try running with arguments:");
  console.log("Usage: node 3-value_argument.js arg1 arg2 ...");
}
