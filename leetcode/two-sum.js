/*
Given an array of integers nums and an integer target, return indices of the two numbers such that
they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element
twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  // loop through first marker
  for (let first = 0; first < nums.length; first++) {
      // loop through second marker
      for(let second = 0; second < nums.length; second++) {
          if(first !== second) {
              if(nums[first] + nums[second] === target) {
                return [first, second]
              }
          }
      }
  }
  return false
}

module.exports = twoSum
