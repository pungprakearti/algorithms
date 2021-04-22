/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

const reverseInt = (x) => {
  // Max 32 bit value
  const max = 2147483648;

  // Store sign
  const sign = x >= 0 ? 1 : -1

  // Convert to string to interpolate digits individually
  const stringX = Math.abs(x).toString()

  // Loop to reverse
  let reverse = ''
  for(let i = 0; i < stringX.length; i++) {
      reverse = stringX[i] + reverse

      // If at anytime value is greater than max, return 0
      if(+reverse > max) return 0
  }

  return +reverse * sign
}

module.exports = reverseInt
