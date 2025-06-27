/**
 * This script prints all lowercase letters from 'a' to 'z'.
 */

for (let i = 97; i <= 122; i++) {
    process.stdout.write(String.fromCharCode(i));
}
console.log(); // Newline at the end
