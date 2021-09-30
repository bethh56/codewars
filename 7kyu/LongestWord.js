// PROBLEM Thinkful-List Drills: Longest Word
// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:
// ['simple', 'is', 'better', 'than', 'complex'] ==> 7

// SOLUTION
function longest(words) {
  const convertStringsToNumbers = words.map((x) => x.length);
  return Math.max(...convertStringsToNumbers);
}