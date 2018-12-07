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

console.log("#8: Match anything with wildcard period . ");
//wildcard character is the period " . "
//to match hug, huh, hut and hum, use regex /hu./ to match all 4
//EXAMPLE
let humStr = "I'll hum a song";
let hugStr = "Hug me a bear please";
let huRegex = /hu./;
console.log(humStr.match(huRegex));
//console.log(hugStr.match(huRegex));

console.log("#9: Match single character with multiple possibilities");
//review:
// /literal/ finds specific words
// /./ wildcard
//Also search with "character classes"
//character classes, u place words inside ([ and ]) brackets
//e.g., to match bag, big, bug and not bog, create the regex...
// /b[aiu]g/  => the [aiu] is the character class that will only match the characters a, i or u
//Example
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

//PROBLEM:
let quoteSample = "Beware of bugs in the above code. I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; //i is to ignore case, g is to use global search
let solution2 = quoteSample.match(vowelRegex);
console.log(solution2);
//issue with above is that to match a large # of characters, that's a lot of typing. So see below.

console.log("#10: Match letters of the alphabet");
//use a hypen character: -
//example: to match lowercase a to e, use [a-e]
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexalphabet = /[a-e]at/;
console.log(catStr.match(bgRegexalphabet));
console.log(batStr.match(bgRegexalphabet));
console.log(matStr.match(bgRegexalphabet));

//PROBLEM:
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result5 = quoteSample2.match(alphabetRegex); // Change this line
console.log(result5);

console.log("#11:Match numbers and letters of the alphabet");
//use the hypen ( - )
//e.g., /[0-5]/ matches any number between and is inclusive
//can also combine a range of letters and numbers in same character set
//Example:

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex));

//PROBLEM:
//Create a single regex that matches a range of letters
//between h and s and a range of numbers btw 2 and 6. Global and case insensitive
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; // Change this line
let result6 = quoteSample3.match(myRegex3); // Change this line
console.log(result6);

console.log("#12: Match single characters not specified");
//create a set of characters you don't want to match
//these type are called negated character sets
//to create such a set, u place a caret character ( ^ ) after the opening bracket
//and before the characters u don't want to match
//e.g., /[^aeiou]/gi matches all characters that are not a vowell.
//even ! , . [ ] @ / and white space are all matched. Only vowels are not
//PROBLEM:
//create a single regex that matches all characters that are not a number or a vowel
//include global and case insensitive flags
let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^aeiou^0-9]/ig; // Change this line
let result7 = quoteSample4.match(myRegex4); // Change this line
console.log(result7);

console.log("#13: Match characters that occur one of more times");
//U can use the + for this (but only searches/finds if the character repeats consecutively, not when it's all over the place)
//e.g., /a+/g would find one match in abc and return a.
//because of the +, it would also find a match in aabc and return aa
//if checking string abab, it would find 2 matches and return ["a", "a"] because they r not in a row, there is another character between them.
//PROBLEM:
let difficultSpelling = "Mississippi";
let myRegex5 = /s+/ig; // Change this line
let result8 = difficultSpelling.match(myRegex5);
console.log(result8);

console.log("#14: Match characters that occur zero or more times");
//character is the asterisk or star *
//example:
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)); //returns ["goooooooo"]
console.log(gPhrase.match(goRegex)); //returns ["g"]
console.log(oPhrase.match(goRegex)); //returns null

//problem:
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // THIS IS STUPID. HOW R WE SUPPOSED TO KNOW NOT TO USE CASE INSENSITIVE?
let result9 = chewieQuote.match(chewieRegex);
console.log(result9);

console.log("#15:Find characters with lazy matching");
//a GREEDY match finds the longest possible part of a string that fits the regex parttern and returns it as a match
//the alternative is called a lazy match
//eg of a greedy match is /t[a-z]*i/ to titanic. Includes pretty much everything
///t[a-z]*i/ returns "titani"
//regular expressions r by default greedy
//you can change it to a lazy match by adding ?
//e.g /t[a-z]*?i - returns "ti"
//PROBLEM:
//Fit the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . (period or dot) matches any character
let text = "<h1>Winter is coming</h1>";
let myRegex6 = /<h1>?/; // Change this line
let result10 = text.match(myRegex6);
console.log(result10);

console.log("#16: Find one or more criminals in a hunt");
