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
