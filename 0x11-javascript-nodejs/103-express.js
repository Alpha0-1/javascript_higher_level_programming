// 103-express.js - Simple Express server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello from Express!");
});

app.get('/about', (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
