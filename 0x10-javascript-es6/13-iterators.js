// 13-iterators.js — Creating custom iterators and generators

// Custom iterator
const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        return current <= end
          ? { done: false, value: current++ }
          : { done: true };
      }
    };
  }
};

console.log('Custom iterator:');
for (const num of range) {
  console.log(num); // 1 2 3 4 5
}

// Generator function
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

console.log('Generator sequence:');
for (const val of generateSequence(1, 3)) {
  console.log(val); // 1 2 3
}
