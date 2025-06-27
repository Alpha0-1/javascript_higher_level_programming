// Demonstrates looping through an array to print multiple strings

const languages = ["English", "French", "Spanish", "German", "Japanese"];

// Loop through each language and print it
for (let i = 0; i < languages.length; i++) {
  const language = languages[i];
  console.log("Language:", language);
}

// Alternative using forEach (ES6 array method)
// languages.forEach(lang => console.log("Language:", lang));
