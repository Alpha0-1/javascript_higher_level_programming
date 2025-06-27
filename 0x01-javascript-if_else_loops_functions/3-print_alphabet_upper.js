// This program prints all uppercase letters from 'A' to 'Z'.

function printAlphabetUpper() {
    // Initialize a string to hold the alphabet
    let alphabet = '';
    
    // Loop from the ASCII code of 'A' to 'Z'
    for (let i = 65; i <= 90; i++) {
        const char = String.fromCharCode(i);
        alphabet += char + ', ';
    }
    
    // Remove the last comma and space, then print
    console.log(alphabet.toUpperCase().slice(0, -2));
}

// Example output: 'A, B, C, ..., Z'
printAlphabetUpper();
