/**
 * proxyRotation.js - Demonstrates proxy rotation using Axios.
 *
 * Rotates through a list of proxies for each request.
 */

const axios = require('axios');
const cheerio = require('cheerio');
const HttpsProxyAgent = require('https-proxy-agent');

const urls = ['https://example.com '];
const proxies = [
  'http://user:pass@proxy1.example.com:8080',
  'http://user:pass@proxy2.example.com:8080'
];

let proxyIndex = 0;

async function scrapeWithProxy(url) {
  const proxy = proxies[proxyIndex % proxies.length];
  proxyIndex++;

  const agent = new HttpsProxyAgent(proxy);

  try {
    const response = await axios.get(url, { httpsAgent: agent });
    const $ = cheerio.load(response.data);
    console.log(`Scraped via proxy ${proxy}: ${$('title').text()}`);
  } catch (error) {
    console.error(`Proxy error: ${error.message}`);
  }
}

urls.forEach(scrapeWithProxy);
