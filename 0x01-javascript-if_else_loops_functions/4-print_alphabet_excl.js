// This program prints all lowercase letters except 'e' and 'q'.

function printAlphabetExcl() {
    // Initialize a string to hold the alphabet
    let alphabet = '';
    
    // Loop from the ASCII code of 'a' to 'z'
    for (let i = 97; i <= 122; i++) {
        const char = String.fromCharCode(i);
        
        // Skip 'e' and 'q'
        if (char === 'e' || char === 'q') {
            continue;
        }
        
        alphabet += char + ', ';
    }
    
    // Remove the last comma and space, then print
    console.log(alphabet.slice(0, -2));
}

// Example output: 'a, b, c, d, f, g, ..., z'
printAlphabetExcl();
