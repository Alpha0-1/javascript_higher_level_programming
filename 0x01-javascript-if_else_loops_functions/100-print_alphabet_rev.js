/**
 * Prints the alphabet in reverse order from 'z' to 'a'.
 */

for (let i = 122; i >= 97; i--) {
    process.stdout.write(String.fromCharCode(i));
}
console.log();
