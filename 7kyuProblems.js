// PROBLEM- codewars Last Survivor
//
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left

// EXAMPLE
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

// SOLUTION
const lastSurvivor = (letters, coords) => {
  // converts string to array of single letters
  // ['a', 'b', 'c']
  const lettersArr = letters.split('');
  // loops through numbers in coords array
  // each number removes 1 string at position x
  coords.forEach((x) => lettersArr.splice([x], 1));
  // returns the remaining letter as a string
  return lettersArr.toString();
}