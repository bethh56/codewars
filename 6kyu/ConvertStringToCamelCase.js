// PROBLEM Convert String To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// EXAMPLE
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// SOLUTION
function toCamelCase(str){
  const newArray = [];
  // used a regex to remove _ and - 
  var patt1 = /[_+-]/g;
  // split the string based on the parameters of the regex
  var result = str.split(patt1);
  // in order to keep it camelCase, pushed the first word into a newArray
  newArray.push(result[0]);
  // looped over array starting a the first index, uppercased the first letter, pushed to newArray
  for(let i = 1; i < result.length; i++) {
    const camelCase = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    newArray.push(camelCase)
  }
  // converted newArray back to a string
  return newArray.join('')
}

