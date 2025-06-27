/**
 * headlessBrowser.js - Basic headless browser automation using Puppeteer.
 *
 * Launches a headless browser and navigates to a URL.
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://example.com ');

  const title = await page.title();
  console.log('Headless Browser Page Title:', title);

  await browser.close();
})();
