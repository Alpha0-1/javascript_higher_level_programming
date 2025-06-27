/**
 * apiScraping.js - Scrapes data from a public REST API endpoint.
 *
 * Makes a GET request to an API and prints returned JSON.
 */

const axios = require('axios');

const apiUrl = 'https://api.example.com/data ';

async function fetchApiData() {
  try {
    const response = await axios.get(apiUrl);
    console.log('API Data:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

fetchApiData();
