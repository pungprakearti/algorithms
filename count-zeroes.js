/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a
function called countZeroes, which returns the number of zeroes in the array.

Constraints:
Time Complexity: O(log N)

Examples:
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
*/

function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(arr.length / 2);

  //check first and last items for quick exits
  if (arr[0] === 0) return arr.length;
  if (arr[arr.length - 1] === 1) return 0;

  while (right - left > 1) {
    //
    //go right
    if (arr[middle] === 1) {
      left = middle;
      //
      //go left
    } else {
      right = middle;
    }

    //less than 2 items, return middle
    if (right - left <= 1) {
      return arr.length - middle;

      //divide again if more than 2 items
    } else {
      middle = Math.floor((right - left) / 2) + left;
    }
  }
}

module.exports = countZeroes;
