/**
 * @file 2-statuscode.js
 * @description This script makes a GET request and prints the HTTP status code of the response.
 */

const https = require('https');

// Define the URL to make the request to
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Send GET request
https.get(url, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
}).on('error', (err) => {
  console.error(`Request error: ${err.message}`);
});

