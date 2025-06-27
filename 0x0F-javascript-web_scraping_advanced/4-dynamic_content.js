/**
 * dynamicContent.js - Handles dynamically loaded content using Puppeteer.
 *
 * Waits for specific elements to load before extracting content.
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://example.com/dynamic-content ', {
    waitUntil: 'networkidle2',
  });

  // Wait for dynamic element to appear
  await page.waitForSelector('.dynamic-element');

  // Extract content
  const content = await page.$eval('.dynamic-element', el => el.textContent);
  console.log('Dynamic Content:', content);

  await browser.close();
})();
