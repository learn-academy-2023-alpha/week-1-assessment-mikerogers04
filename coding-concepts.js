// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The expected output would be 10. .length counts the entire string, even the space in between
// b) Verify and explain: Verified the console.log and I was correct. .length will count all characters in a given string

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The expected output would be "l". The 4th value in the string is "l", as 4 is being passed in the []
// b) Verify and explain: Verified the console.log and output was "o". Similar to how arrays are indexed, a string is zero indexed. Therefore,
//by referencing index 4 in the string greeting, it would output "o" and not the 4th character which is "l"
// Note: Really good question!! Tricky question, but important concept learned. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: The expected output would be "Ruby". Even though strings are zero indexed, this is an array and each element in an array is 
//zero indexed as well. "Ruby" is at index 1 within the languages array. 
// b) Verify and explain: Verified console.log and got "Ruby" and was correct. Similar explanation as above, "Ruby" is at index 1 in the numbers
//array. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: The expected ouput would be a method error. .toUpperCase is a method for strings not to be used on an array of strings. 
// b) Verify and explain: Verfied console.log and got a Type Error because toUpperCase is not a function. I would say I was partially correct
//because I knew .toUpperCase could not be used on an array. But, should have been more specific that it was a type error. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: The expected output would be "Number". The typeOf method returns the type of variable it is. 
// b) Verify and explain: Verified console.log and got "number". Using .length method on an array will return a number, in this case it would be
//3 but typeOf was used so it would log the data type of 3, which is a number. 
