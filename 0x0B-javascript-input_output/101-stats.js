/**
 * Module: FileStatsLogger
 * Description: Logs statistics about a file including size, creation time, etc.
 */

const fs = require('fs');
const path = require('path');

/**
 * Function name: logFileStats
 * Description: Logs detailed statistics about a file.
 * @param {string} filePath - Path to the file to analyze.
 */
function logFileStats(filePath) {
  try {
    // Get file statistics
    const stats = fs.statSync(filePath);
    
    console.log(`File Statistics for: ${filePath}`);
    console.log(`--------------------------------`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Last Accessed: ${stats.atime}`);
    console.log(`Last Modified: ${stats.mtime}`);
    console.log(`Creation Time: ${stats.ctime}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
    console.log(`Is File: ${stats.isFile()}`);
    console.log(`Owner: ${stats.uid}`);
    console.log(`Group: ${stats.gid}`);
    console.log(`Mode: ${stats.mode.toString(8)}`);
    console.log(`--------------------------------`);
  } catch (error) {
    throw new Error(`Error getting file stats: ${error.message}`);
  }
}

// Example usage:
if (require.main === module) {
  const filePath = process.argv[2];
  
  if (!filePath) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
  }

  try {
    logFileStats(filePath);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = logFileStats;
