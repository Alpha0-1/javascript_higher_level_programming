/**
 * parallelScraping.js - Performs parallel scraping of multiple pages.
 *
 * Uses Promise.all() to scrape several URLs simultaneously.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
  'https://example.com/page1 ',
  'https://example.com/page2 ',
  'https://example.com/page3 '
];

async function scrapeUrl(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return { url, title: $('title').text() };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return { url, error: error.message };
  }
}

Promise.all(urls.map(scrapeUrl))
  .then(results => {
    results.forEach(result => {
      console.log(`URL: ${result.url}`);
      if (result.title) console.log(`Title: ${result.title}`);
      else console.log(`Error: ${result.error}`);
      console.log('---');
    });
  });
