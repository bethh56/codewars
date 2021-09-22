// PROBLEM 
// FUNCTIONAL ADDITION

// Create a function add(n)/Add(n) which returns a function that always adds n to any number
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// This problem calls the function like add(1)(2)

// SOLUTION 
function add(n) {
  return function add(num2){return n + num2}
}

