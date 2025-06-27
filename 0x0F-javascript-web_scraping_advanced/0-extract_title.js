/**
 * extractTitle.js - Extracts the title of a given webpage.
 *
 * This script fetches a webpage using Axios and parses its HTML with Cheerio
 * to extract the document title.
 */

const axios = require('axios');
const cheerio = require('cheerio');

// Target URL
const url = 'https://example.com ';

// Fetch and parse the page
axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Extract and log the title
    const title = $('head > title').text();
    console.log(`Page Title: ${title}`);
  })
  .catch(error => {
    console.error('Error fetching page:', error.message);
  });
