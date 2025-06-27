/**
 * rateLimiting.js - Implements delays between requests to avoid rate limiting.
 *
 * Delays each request by a fixed interval to mimic polite scraping.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
  'https://example.com/page1 ',
  'https://example.com/page2 ',
  'https://example.com/page3 '
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeWithDelay(url, delayMs) {
  await delay(delayMs);
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    console.log(`Scraped ${url} - Title: ${$('title').text()}`);
  } catch (error) {
    console.error(`Failed to scrape ${url}: ${error.message}`);
  }
}

urls.forEach((url, i) => {
  scrapeWithDelay(url, i * 2000); // 2-second delay between requests
});
