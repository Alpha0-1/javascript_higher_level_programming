/**
 * monitoring.js - Monitors a webpage for content changes.
 *
 * Compares current content against a stored version.
 */

const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com/monitor ';
const cacheFile = 'cache.txt';

async function checkForChanges() {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const content = $('#content').text(); // monitor a specific selector

  if (fs.existsSync(cacheFile)) {
    const oldContent = fs.readFileSync(cacheFile, 'utf8');
    if (oldContent === content) {
      console.log('No changes detected.');
    } else {
      console.log('Content changed!');
      fs.writeFileSync(cacheFile, content);
    }
  } else {
    fs.writeFileSync(cacheFile, content);
    console.log('Initial content saved.');
  }
}

checkForChanges();
