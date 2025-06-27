/**
 * formAutomation.js - Automates form submission using Puppeteer.
 *
 * Fills out and submits a login form programmatically.
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // visible browser
  const page = await browser.newPage();

  await page.goto('https://example.com/login ');

  // Fill form fields
  await page.type('#username', 'myUsername');
  await page.type('#password', 'myPassword');

  // Submit form
  await page.click('button[type="submit"]');

  // Wait for navigation or result
  await page.waitForNavigation();

  console.log('Form submitted successfully.');

  await browser.close();
})();
