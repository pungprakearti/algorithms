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
  //
  //fail fast if number is outside of array
  if (num < arr[0] || num > arr[arr.length - 1]) return -1;

  const first = findFirst(arr, num);

  //last item in array is first occurance
  if (first === arr.length - 1) return 1;

  const last = findLast(arr, num, first);

  //return result + 1 because index starts at 0;
  return last - first + 1;
}

function findFirst(arr, num) {
  let left = 0;
  let right = arr.length;
  let middle = Math.floor((right - left) / 2);

  while (right - left > 2) {
    //
    //go left
    if (arr[middle] >= num) {
      right = middle;

      //go right
    } else {
      left = middle;
    }

    middle = Math.floor((right - left) / 2) + left;
  }
  return middle;
}

function findLast(arr, num, left) {
  let right = arr.length;
  let middle = Math.floor((right - left) / 2);

  while (right - left > 2) {
    //
    //go right
    if (arr[middle] <= num) {
      left = middle;

      //go left
    } else {
      right = middle;
    }

    middle = Math.floor((right - left) / 2) + left;
  }
  return left;
}

module.exports = sortedFrequency;
