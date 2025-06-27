/**
 * @file 101-starwars_movies.js
 * @description Lists all movies a specific Star Wars character has appeared in.
 * @usage node 101-starwars_movies.js <character-id>
 */

const axios = require('axios');

if (process.argv.length < 3) {
  console.error('Usage: node 101-starwars_movies.js <character-id>');
  process.exit(1);
}

const charId = process.argv[2];
const url = `https://swapi.dev/api/people/ ${charId}`;

async function listMoviesByCharacter() {
  try {
    const response = await axios.get(url);
    const movieUrls = response.data.films;

    for (const movieUrl of movieUrls) {
      const movieRes = await axios.get(movieUrl);
      console.log(movieRes.data.title);
    }
  } catch (error) {
    console.error(`Error fetching character data: ${error.message}`);
  }
}

listMoviesByCharacter();
