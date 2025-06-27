/**
 * @file 3-starwars_title.js
 * @description Fetches and logs the title of a Star Wars movie by ID from SWAPI.
 * @usage node 3-starwars_title.js <movie-id>
 */

const axios = require('axios');

if (process.argv.length < 3) {
  console.error('Usage: node 3-starwars_title.js <movie-id>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/ ${movieId}/`;

async function getMovieTitle() {
  try {
    const response = await axios.get(url);
    console.log(response.data.title);
  } catch (error) {
    console.error(`Error fetching movie title: ${error.message}`);
  }
}

getMovieTitle();
