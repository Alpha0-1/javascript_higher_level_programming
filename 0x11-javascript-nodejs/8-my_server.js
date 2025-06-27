/**
 * File: 8-my_server.js
 * Description: Custom HTTP server with routing logic
 */

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("About us page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Custom server running at http://localhost:4000");
});
