/**
 * @file 4-starwars_count.js
 * @description Counts how many times a character appears in all Star Wars films.
 * @usage node 4-starwars_count.js <character-id>
 */

const axios = require('axios');

if (process.argv.length < 3) {
  console.error('Usage: node 4-starwars_count.js <character-id>');
  process.exit(1);
}

const charId = process.argv[2];
const baseUrl = 'https://swapi.dev/api/films/ ';
let count = 0;

async function countCharacterAppearances() {
  try {
    // Get all movies
    const res = await axios.get(baseUrl);
    const films = res.data.results;

    for (const film of films) {
      const filmCharUrls = film.characters;
      if (filmCharUrls.includes(`https://swapi.dev/api/people/ ${charId}/`)) {
        count++;
      }
    }

    console.log(count);
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

countCharacterAppearances();
