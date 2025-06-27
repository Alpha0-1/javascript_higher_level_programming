/**
 * @file 6-completed_tasks.js
 * @description Counts how many todos are completed by each user.
 */

const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/todos';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    const todos = JSON.parse(data);
    const completed = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        completed[todo.userId] = (completed[todo.userId] || 0) + 1;
      }
    });

    console.log(completed);
  });
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

