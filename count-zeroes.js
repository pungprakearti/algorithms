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

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0

module.exports = countZeroes;
