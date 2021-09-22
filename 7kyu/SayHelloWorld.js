// PROBLEM
// Say "Hello World" JS Style

// Write the definition of the function "say" such that calling this:
// say("Hello")("World")
// returns "Hello World"

// SOLUTION
const say = (str1,) => function(str2){return `${str1} ${str2}`};

