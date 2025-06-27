// 8-computed-property.js — Dynamically setting object keys

const key = 'dynamicKey';

const obj = {
  staticKey: 'Static Value',
  [key]: 'Dynamic Value'
};

console.log(obj); // { staticKey: 'Static Value', dynamicKey: 'Dynamic Value' }

// Example with dynamic property names
function createObject(key, value) {
  return {
    [key]: value,
    [`_${key}`]: `Private: ${value}`
  };
}

const result = createObject('username', 'john_doe');
console.log(result); 
// { username: 'john_doe', _username: 'Private: john_doe' }
