// 100-promises.js — Working with promises

const fetchData = () =>
  new Promise((resolve, reject) => {
    const success = Math.random() > 0.3;
    setTimeout(() => {
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 1000);
  });

fetchData()
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
