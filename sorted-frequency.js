/*
Given a sorted array and a number, write a function called sortedFrequency
that counts the occurrences of the number in the array

Constraints:
Time Complexity: O(log N)

Examples:
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/

function sortedFrequency(arr, num) {
  if (num < arr[0] || num > arr[arr.length - 1]) return -1;
  const first = findFirst(arr, num);
  console.log('first: ', first);

  //last item in array is
  if (first === arr.length - 1) return 1;
}

function findFirst(arr, num) {
  let left = 0;
  let right = arr.length;
  let middle = Math.floor((right - left) / 2);

  // while (left < right) {
  while (right - left > 2) {
    //go left
    if (arr[middle] >= num) {
      right = middle;
    } else {
      //go right
      left = middle;
    }

    middle = Math.floor((right - left) / 2) + left;
  }
  return middle;
}

function findLast() {}

module.exports = sortedFrequency;

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
