// 101-async-await.js — Simplifying asynchronous code with async/await

async function getData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('Async Data'), 1000);
    });
    console.log('Received:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
