/*
  autoComplete takes a string and an array of strings and returns the
  matching strings in an array

  No matches returns an empty array
*/
const autoComplete = (str, arr) => {
  let matches = []

  // fail fast
  if(!str) {
    return matches
  }

  // loop through array and look for exact matches based on length
  // of string
  for(let i = 0; i < arr.length; i++) {
    if(str.toLowerCase() === arr[i].substring(0,str.length).toLowerCase()) {
      matches.push(arr[i])
    }
  }

  return matches
}

module.exports = autoComplete
