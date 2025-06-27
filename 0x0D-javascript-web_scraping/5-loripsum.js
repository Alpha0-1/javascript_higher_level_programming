/**
 * @file 5-loripsum.js
 * @description Fetches and logs a lorem ipsum paragraph from an API.
 * @usage node 5-loripsum.js
 */

const axios = require('axios');

async function getLoremIpsum() {
  try {
    const response = await axios.get('https://loripsum.net/api/p ');
    console.log(response.data.trim());
  } catch (error) {
    console.error(`Error fetching lorem ipsum: ${error.message}`);
  }
}

getLoremIpsum();
