// PROBLEM Reversed String 
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

// SOLUTION
function solution(str){
  const newArray = [];
	const stringToArray = str.split('');
 	for(let i = stringToArray.length - 1; i >= 0; i--) {
    newArray.push(stringToArray[i]);
  }
  return newArray.join('');
}

// REFACTORED
const solution = (str) => str.split('').reverse().join('');