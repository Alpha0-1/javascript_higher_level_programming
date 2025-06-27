// 9-my_client.js - Custom TCP client

const net = require('net');

const client = net.createConnection({ port: 8000 }, () => {
  console.log("Connected to server.");
  client.write("Hello Server!");
});

client.on('data', (data) => {
  console.log("Server response:", data.toString());
});

client.on('end', () => {
  console.log("Disconnected from server.");
});
