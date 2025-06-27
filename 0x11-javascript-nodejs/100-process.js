// 100-process.js - Exploring the process module

console.log("Current working directory:", process.cwd());
console.log("Node.js version:", process.version);
console.log("Process PID:", process.pid);

// Listen for exit event
process.on('exit', (code) => {
  console.log(`Process exiting with code ${code}`);
});

// Simulate exit after 2 seconds
setTimeout(() => {
  console.log("Exiting...");
  process.exit(0);
}, 2000);
