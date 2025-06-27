/**
 * extractLinks.js - Extracts all hyperlinks from a webpage.
 *
 * This script fetches a webpage and uses Cheerio to find and print all anchor tags' href values.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com ';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Loop through each link
    $('a').each((i, link) => {
      const href = $(link).attr('href');
      if (href) console.log(href);
    });
  })
  .catch(error => {
    console.error('Error extracting links:', error.message);
  });
