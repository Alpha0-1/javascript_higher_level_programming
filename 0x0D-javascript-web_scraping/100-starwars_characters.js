/**
 * @file 100-starwars_characters.js
 * @description Lists all characters from a specific Star Wars movie.
 * @usage node 100-starwars_characters.js <movie-id>
 */

const axios = require('axios');

if (process.argv.length < 3) {
  console.error('Usage: node 100-starwars_characters.js <movie-id>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/ ${movieId}/`;

async function listCharacters() {
  try {
    const response = await axios.get(url);
    const characters = response.data.characters;

    for (const charUrl of characters) {
      const charRes = await axios.get(charUrl);
      console.log(charRes.data.name);
    }
  } catch (error) {
    console.error(`Error fetching characters: ${error.message}`);
  }
}

listCharacters();
