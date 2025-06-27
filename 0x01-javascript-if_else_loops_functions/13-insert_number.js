/**
 * Insert a number into an array while keeping it sorted
 */

function insertNumber(arr, number) {
  const index = arr.findIndex(el => el > number);
  if (index === -1) {
    arr.push(number);
  } else {
    arr.splice(index, 0, number);
  }
  return arr;
}

console.log(insertNumber([1, 3, 4, 10], 5)); // [1, 3, 4, 5, 10]
