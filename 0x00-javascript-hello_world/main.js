// Import require modules
const colors = require('colors');
const execSync = require('child_process').execSync;

// List of files to run
const files = [
  '0-hello.js',
  '1-multi_languages.js',
  '2-arguments.js',
  '3-value_argument.js',
  '4-concat.js',
  '5-to_integer.js',
  '6-multi_languages_loop.js',
  '7-multi_c.js',
  '8-square.js',
  '9-add.js',
  '10-factorial.js',
  '11-second_biggest.js',
  '12-object.js',
  '13-add.js',
  '100-let_me_const.js',
  '101-call_me_moby.js',
  '102-add_me_maybe.js',
  '103-object_fct.js'
];

// Run each file with a delay for readability
files.forEach(file => {
  console.log(colors.cyan(`\nRunning ${file}`));
  execSync(`node ${file}`);
  console.log(colors.green('Done'));
});

// Example usage:
// Run this file to execute all example files in sequence:
// node main.js
