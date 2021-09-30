// PROBLEM Move Zeros
// Implement a function move_zeros which takes two arguments,
// first an array of numbers arrNum and second a Boolean value isRight (default is true) 
// and returns the array with all zero to right if isRight is true else to left if isRight is false.

// EXAMPLE
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]


// SOLUTION
function move_zeros(arrNum, isRight){
  const zeroArray = [];
  const numberArray = [];
  arrNum.map((x) => { x == 0 ? zeroArray.push(x) : numberArray.push(x)});
  return isRight || isRight === undefined ?  numberArray.concat(zeroArray) 
                                          :  zeroArray.concat(numberArray);
}