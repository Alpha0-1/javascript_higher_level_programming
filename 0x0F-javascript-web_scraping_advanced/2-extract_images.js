/**
 * extractImages.js - Extracts all image URLs from a webpage.
 *
 * Uses Axios and Cheerio to parse HTML and extract image source URLs.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com ';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract and print image sources
    $('img').each((i, img) => {
      const src = $(img).attr('src');
      if (src) console.log(src);
    });
  })
  .catch(error => {
    console.error('Error extracting images:', error.message);
  });
