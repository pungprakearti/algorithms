/**
 * Check two numbers to see if each has the same frequency of digits
 */

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  //fail fast if lengths aren't equal
  if (num1.length !== num2.length) return false;

  let freqObj = {};

  //count frequency of digit in num1 and store in freqObj
  for (let digit of num1) {
    freqObj[digit] ? freqObj[digit]++ : (freqObj[digit] = 1);
  }

  //iterate through num2.
  //check each digit against the freqObj.
  //if a value is falsey return false.
  //else remove 1 from each instance of the digit in freqObj
  for (let digit of num2) {
    if (!freqObj[digit]) return false;
    freqObj[digit]--;
  }

  //win slow
  return true;
}

module.exports = sameFrequency;
