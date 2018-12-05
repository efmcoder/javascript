console.log("#1: Regular expressions: using the test method");
let testStr = "freecodecamp";
let testRegex = /code/; //you are searching for the word code in freecodecamp in above line
const test = testRegex.test(testStr);
console.log(testRegex.test(testStr)); //answer = true
//can just console.log the entire path or
//make it a variable and console log it as shown below
console.log(test); //answer = true

console.log("#2: Match literal strings");
//example
let testRegex2 = /Kevin/;
let testStr2 = "Hello, my name is Kevin.";
const test2 = testRegex2.test(testStr2); //TEST
console.log(test2); //answer = true

//if u were to search for kevin or KEVIN, answer would be false

console.log("#4: Match a literal string with diff posibilities");
//to match yes or no, the regex to use is /yes|no/
// | this is the OR operator
//search for more than 2: /yes|no|maybe/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

console.log("#5: ignore case while matching");
//to search words that may or may not be capitalized
//search both using a flag
//there are other flags but the flag that ignores the case is i
//append it to the regex as follows
// /stringname/i SEE EXAMPLE BELOW
//Problem
let myString = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // Change this line
let result2 = fccRegex.test(myString);
console.log(result2);

console.log("#6: Extract Matches");
//use .match() method
//apply the method on a string and pass in the regex
//inside the parentheses
//EXAMPLE:
var greeting = "Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let solution = ourStr.match(ourRegex);
//console.log(solution);
console.log(solution);

//PROBLEM
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result3 = extractStr.match(codingRegex); // Change this line
console.log(result3);

console.log("#7: Find more than the first match");
//use the g flag
//PROBLEM
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result4 = twinkleStar; // Change this line
console.log(result4);
