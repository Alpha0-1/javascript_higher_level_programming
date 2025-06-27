// 5-http_client.js - Making an HTTP GET request

const http = require('http');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log("Response data:");
    console.log(data);
  });
});

req.on('error', (e) => {
  console.error("Problem with request:", e.message);
});

req.end();
