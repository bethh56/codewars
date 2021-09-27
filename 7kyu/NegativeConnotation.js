// PROBLEM Negative Connotation
// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), 
//you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

// EXAMPLE
// "A big brown fox caught a bad rabbit" => True/true
// "Xylophones can obtain Xenon." => False/false

// SOLUTION 
function connotation(str) {
  // declare variables with a value of zero
  let firstCounter = 0;
  let secondCounter = 0;
  //split the array and filter out the empty spaces, map over and get the first letters of each word
  const strToArr = str.split(' ').filter((word) => (word.length > 0)).map((x) => x.charAt(0));
  // loop through each letter and use a ternary + regex to increase the counter variables
  strToArr.forEach((letter) => {
    letter.match(/[a-m]/i) ? firstCounter++ : secondCounter++;
  });
  // return T or F based on which variable has the highest value
  return firstCounter >= secondCounter ? true : false;
}