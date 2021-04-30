/*
findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array
of sorted numbers and an integer. The function should return the index
of num in the array. If the value is not found, return -1.

Constraints:
Time Complexity: O(log N)

Examples:
findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
 */

function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  let middle = Math.floor((right - left) / 2) + left;
  // console.log(arr[middle]);

  //checking the three pointers
  if (arr[middle] === num) return middle;
  if (arr[left] === num) return left;
  if (arr[right] === num) return right;

  while (right - left > 2) {
    if (arr[middle] < num) {
      //go right
      if (arr[middle] < arr[left]) {
        left = middle;

        //go left
      } else {
        right = middle;
      }
    } else {
      //go right
      if (arr[middle] > arr[left]) {
        left = middle;

        //go left
      } else {
        right = middle;
      }
    }

    // if (num > arr[left] && num < arr[middle]) {
    //   //go left
    //   right = middle;
    // }

    // if (num < arr[left])
    middle = Math.floor((right - left) / 2) + left;
    // console.log(arr[middle]);
  }
  if (arr[middle] === num) return middle;
  else return -1;
}

module.exports = findRotatedIndex;

// console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
