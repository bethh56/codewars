// PROBLEM Case Swapping
// Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS


// SOLUTION
function swap(str){
  const newArr = [];
  // split array and mapped over each letter checking if it is uppercase or lowercase
  // ternary pushes letter to a newArr
  str.split('').map((x) => x == x.toUpperCase() 
                    ? newArr.push(x.toLowerCase())
                    : newArr.push(x.toUpperCase()));
  // return and join newArr                  
  return newArr.join('');
}