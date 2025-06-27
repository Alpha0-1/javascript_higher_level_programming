/**
 * This script prints numbers from 0 to 99 separated by commas.
 */

for (let i = 0; i <= 99; i++) {
    process.stdout.write(i.toString());
    if (i !== 99) {
        process.stdout.write(", ");
    }
}
console.log();
