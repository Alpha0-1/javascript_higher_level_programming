/**
 * File: 3-scrape_table.js
 * -----------------------
 * Scrapes data from the first HTML table on a webpage.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://example.com/table';

axios.get(URL)
  .then(response => {
    const $ = cheerio.load(response.data);
    const table = [];
    $('table').first().find('tr').each((i, row) => {
      const rowData = [];
      $(row).find('th, td').each((j, cell) => {
        rowData.push($(cell).text().trim());
      });
      table.push(rowData);
    });
    console.table(table);
  })
  .catch(error => console.error('Error scraping table:', error));

