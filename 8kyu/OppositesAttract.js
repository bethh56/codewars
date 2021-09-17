// PROBLEM
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// SOLUTION
function lovefunc(flower1, flower2){
  // added the flower petals together to use in if statement
  const addFlowers = flower1 + flower2;
  // if the number is divisible by 2, it will return true.  If modulus returns 1, then false
  if (addFlowers % 2) {
    return true
  } else return false
}

// REFACTORED SOLUTION
// used a ternary to condense code down
const lovefunc = (flower1, flower2) => ((flower1 + flower2) % 2 ? true : false)