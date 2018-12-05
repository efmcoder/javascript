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
