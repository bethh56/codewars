// PROBLEM- codewars Last Survivor (9/14/2021)

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
const lettersArr = letters.split('');
  // loops through numbers in coords array each number removes 1 string at position x
coords.forEach((x) => lettersArr.splice([x], 1));
  // returns the remaining letter as a string
return lettersArr.toString();
}
// ---------------------------------------------------------------------------------------------------------------------------- //

// PROBLEM codewars Highest and Lowest (9/15/2021)

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// EXAMPLE
// highAndLow("1 9 3 4 -5"); would return "9 -5"

// SOLUTION
function highAndLow(numbers){
  //splits the string into an array of single strings
  const numberArr = numbers.split(' ');
  // using map, go over each item in the array and convert it from string to a number
  const convertStringToNumber = numberArr.map((x) => parseInt(x));
  // create a new array to push the min and max numbers into
  const minAndMaxArray = []
  const findMax = minAndMaxArray.push(Math.max(...convertStringToNumber));
  const findMin = minAndMaxArray.push(Math.min(...convertStringToNumber));
  // convert the array back into a string
  return minAndMaxArray.join(' ')
}
// ADDITIONAL THOUGHTS
// another method I looked at for this problem was to sort the array in decending order and take the first and last element from it
// ---------------------------------------------------------------------------------------------------------------------------- //
