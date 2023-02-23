// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: create a function called boilingPoint that passes in a parameter of a number. 
            // Conditional if/else statements to check if the number is below boiling point, at boiling point, and above boiling point. Also an else to output an error. if conditional will return the value of the number and "is below boiling point".
            // else/if will return the value of the number and "is above boiling point". Next else/if will return the value of the number and "is at boiling point". else will return an appropriate error message to the user. 
            //Multiple function invoke statements that pass in the given const parameters

const boilingPoint = (number) => {
    if(number < 212){
        return `${number} is below boiling point` //String interpolation
    } else if(number > 212){
        return `${number} is above boiling point` //String interpolation
    } else if(number === 212){
        return `${number} is at boiling point` //String interpolation
    } else {
        return "Error: Please input a number value" //Error message if anything other than a number is passed as a parameter
    }
}
const temp1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPoint(temp1))   //console log after set paramaters, cannot be before initialization
const temp2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPoint(temp2))  //console log after set paramaters, cannot be before initialization
const temp3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(temp3))  //console log after set paramaters, cannot be before initialization
const error = "hi" 
// Exepected output: Error: Please input a number value"
console.log(boilingPoint(error)) //Extra console log to verify the correct parameter is being passed. In this case a string is being passed, when the function expects a number, therefore an error message will output

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: concat both arrays into one a newly created array called combinedArray. Use .length method to return the length of the combined array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(combinedArray) //console logging to verify .concat worked as intended
//Expected output of .concating both arrays: [2, 5, 2, 2, 4, 6, 3, 5, 3]
console.log(combinedArray.length) //Output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: create an array using .split method to put a string into an array, passing in "" to separate each character as its own value in the new array. use .reverse to reverse the order of all the values in the array. Then use .join to convert the array back into a reversed string. 

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"
var stringArray = currentCohort.split("")
console.log(stringArray) //console log to verify .split put the string into a new array
//expected output: ['A', 'l', 'p', 'h', 'a' ' ', '2', '0', '2', '3']
console.log(stringArray.reverse()) //console log to verify reverse order of the array
//Expected outcome: ['3', '2', '0', '2', ' ' 'a', 'h', 'p', 'l', 'A']
console.log(stringArray.join("")) //console log to verify .join converting the array back into a reversed string
//Output: "3202 alphA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: use .lastIndexOf method with the provded value to return the last occurence of 42 inside the myNumbers array

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(42)) //console log using .lastIndexOf with the value 42 passed inside the ()

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(10)) //console log using .lastIndexOf with the value 10 passed inside the ()

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: use .sort methoed on the both arrays. Include optional argument using compare function to sort the numbers from highest to lowest. .sort method sorts values as strings, both arrays below are arrays of numbers. 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoSummerTemperatures.sort((a, b) => (b - a))) //(a, b) is the compare function, comparing two numbers in the array
//Output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sanDiegoWinterTemperatures.sort((a, b) => (b - a))) //(a, b) is the compare function, comparing two numbers in the array and sorting based on whether they are negative, zero or positive repectfully
//Expected output: [68, 67, 66, 66, 62, 59, 59]