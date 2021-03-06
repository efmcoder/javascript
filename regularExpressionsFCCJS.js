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
//the regex /z+/ matches z when it appears 1 or more
//times in a row
//write a greedy regex that finds 1 or more criminals
//within a group of others
//criminal is represented by letter case
  let crowd = "P1CCP2CD68FGFPPCECC5S654F5C6545SC44654F5C41";
  let reCriminals = /c+/ig;
  let matchedCriminals = crowd.match(reCriminals);
  console.log(matchedCriminals);

console.log("#17: Match Beginning String Patters");
//Caret ^ = used to not find something (negated string)
//Caret ^ = also used to search for patterns at the
//beginning of strings
let firstString = "Who is first not Ricky can be found";
let firstRegex = /^Ricky/; //returns true if Ricky is the first word in the string
console.log(firstRegex.test(firstString));
//returns false

//Example II
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));
//returns true

console.log("#18: Match Ending String Patters dollar sign $");
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));

console.log("#19: Match all letters and numbers");
// \w this set finds all. It is the same as [A-Za-z0-9_]
//it matches upper case, lower case, numbers and underscore
//these shortcut character classes r known as shorthand character classes
let quoteSample5 = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /\w/ig;
let result11 = quoteSample5.match(alphabetRegexV2).length;
console.log(result11);

console.log("#20: Match everything but letters and numbers");
//search for the opposite of alphanumerics
//search for the opposite of \w with \W
//\W is the same as [^A-Za-z0-9_]
//so looking for special characters not underscore

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));

//PROBLEM
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig;
let result12 = quoteSample6.match(nonAlphabetRegex).length;
console.log(result12);

console.log("#21: Match all numbers");
//look for just digits or numbers
//use \d which is same as [0-9]
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/ig;
let result13 = numString.match(numRegex).length;
console.log(result13);
//returns 3 because there are 3 digits

console.log("#22: Match all non-numbers");
let numString2 = "Your sandwich will be $5.00";
let numRegex2 = /\D/ig;
let result14 = numString2.match(numRegex2).length;
console.log(result14);

console.log("#23: Restrict possible Usernames");
let userName = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;//don't include:
//starts with lowercase
//2 digits or less
//
let result15 = userCheck.test(userName);
console.log(result15);

console.log("#24: Match Whitespace");
//use \s
//also matches carriage return, tab, form feed and new line
//same as \r\t\f\n\v
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
let result16 = whiteSpace.match(spaceRegex);
console.log(result16);

//PROBLEM:
let sample7 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result17 = sample7.match(countWhiteSpace);
console.log(result17);

console.log("#25: Match non-whitespace characters");
//use \S
//same as [^\r\t\f\n\v]
let sample8 = "Whitespace is important in separating words";
let countWhiteSpace2 = /\S/g;
let result18 = sample8.match(countWhiteSpace2);
console.log(result18);

console.log("#26: Specify Upper and Lower number of matches");
//use + to look for one or more characters
//use * to look for zero or more characters
//quantity specifiers: { and }
//put 2 numbers btw the brackets
//e.g., to match only the letter a appearing btw 3 and 5
//times in the string "ah" the regex would be /a{3,5}h/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
let result19 = multipleA.test(A4);
console.log(result19);
//answer = true
//PROBLEM
let ohStr = "ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result20 = ohRegex.test(ohStr);
console.log(result20);
//answer = false

console.log("#27: Specify only the lower number of matches");
//keep first number followed by a comma
let A5 = "aaaaah";
let A3 = "aaah";
let multipleAs = /a{3,}h/;
let result21 = multipleAs.test(A4);
console.log(result21);
//answer = true
//PROBLEM
let ohStr2 = "ohhh no";
let ohRegex2 = /Oh{3,}sno/;
let result22 = ohRegex2.test(ohStr2);
console.log(result22);

let A6 = "haaaah";
let A7 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleAA = /ha{3,}h/;
let result23 = multipleAA.test(A6);
let result24 = multipleAA.test(A7);
console.log(result23);
console.log(result24);

console.log("Match word Hazzzah only when it has 4 or more letter z's");
let haStr = "Hazzzah";
let haRegex = /z{4,}/;
let result25 = haRegex.test(haStr);
console.log(result25);


console.log("Word Hazzzah now has only 3 letter z's");
let haStr2 = "Hazzzah";
let haRegex2 = /z{3,}/;
let result26 = haRegex2.test(haStr2);
console.log(result26);

console.log("#28: Specify exact number of matches");
//specify only a specific number of matches
//have that 1 number btw the curly brackets
console.log("Word Hazzzah has 4 letter z's?");
let haStr3 = "Hazzzah";
let haRegex3 = /z{4}/; //does Hazzzah have 4 letter z's?
let result27 = haRegex3.test(haStr3);
console.log(result27);
//should return false
//^([A-Z]{3})$
//The {3} indicates that the [A-Z] must appear exactly 3 times.
//PROBLEM:
//do not match Timber
//do not match Timmber
//do not match Timmmber
//Match Timmmmber (with 4 m's)
//do not match Timber with 30 m's
console.log("#28 EXAMPLE");
let timStr2 = "Timmmmber";
let timRegex4 = /Tim{4}ber/; // Spell Timber and put 4 after the m
let result28 = timRegex4.test(timStr2);
console.log(result28);

console.log("#29: Check for all or none");
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/; //? in front of the u as that is what we r questioning
result29 = rainbowRegex.test(american);
result30 = rainbowRegex.test(british);
console.log(result29); //returns true
console.log(result30); //returns true
console.log(british.match(rainbowRegex));
console.log(american.match(rainbowRegex));

console.log("#30: Positive and Negative lookahead");
//lookaheads r patterns that tell JS to look ahead
//in the string to check for patterns further along
//useful for multiple patterns over the same string
//2 kinds: positive and negative lookaheads
//positive: looks to make sure the element is there but won't actually match it
//positive is used as (?=...) where ...is the pattern u want to be there
//negative looks to make sure element is NOT THERE
//negative is used as (?!...) where ... is the pattern u don't want to be there

let quit = "qu";
let noQuit = "qt";
let quRegex = /q(?=u)/;
let noQRegex = /q(?!u)/;
result31 = quRegex.test(quit);
result32 = noQRegex.test(noQuit);
result33 = quit.match(quRegex);
result34 = noQuit.match(noQRegex);
console.log(result31);
console.log(result32);
console.log(result33);
console.log(result34);

console.log("Use +ve and -ve lookaheads to check patterns in a password");
let password = "Magomano22";
let checkPass = /(?=\w{8,16})(?=\D*\d)/;
//\w finds all is equivalent to [A-Za-z0-9_]
//\D match non-digits
//\d same as [0-9] match digits
//* looks for zero or more characters
result35 = password.match(checkPass);
result36 = checkPass.test(password);
console.log(result35);
console.log(result36);//if there r digits, should return true

//PROBLEM:
let sampleWord = "astronaut17";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result37 = pwRegex.test(sampleWord);
let result38 = sampleWord.match(pwRegex);
console.log(result37);
console.log(result38);

console.log("Review: Check that a string contains any letter followed by 4 numbers");
//any letter: \w also means [A-Za-z0-9_]
//4 digits {4}
//[A-Za-z][0-9]{4}]
//the above means:
//i) match a character class of any letter [A-Za-z]
//ii) match a character class of any number [0-9]
//iii) repeated 4 times {4}
let stringFaith = "Faith";
let faithRegex = /[A-Za-z0-9]{4}/;
let result39 = stringFaith.match(faithRegex);
let result40 = faithRegex.test(stringFaith);
console.log(result39);
console.log(result40);

console.log("#31:Reuse Patterns using CAPTURE GROUPS");
//Parentheses ( and ) are used to repeat substrings
//you put the regex of the pattern that will repeat btw the parentheses
//to specify where the repeat string will appear, u use the backslash \ and then a number
//this # starts at 1 and increases with each additional capture group u use
//e.g., \1 to match the first group

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test(repeatStr));//returns true
console.log(repeatStr.match(repeatRegex));//finds where the match is
// \w finds all. Same as [A-Za-z0-9_]
// \s matches whitespace, tab, etc
// + to look for one or more characters
// \d match digits 0-9
// \D match non-digits
// ^ everything not a vowel
let repeatNum = "42 42 42";
let repeat1Regex = /^(\d+)\s\1\s\1$/;
console.log(repeat1Regex.test(repeatNum));
console.log(repeatNum.match(repeat1Regex));
/*
Regex should use the shorthand character class for digits.
Passed
Regex should reuse the capture group twice.
Passed
Regex should have two spaces separating the three numbers.
Passed
Regex should match "42 42 42".
Passed
Regex should match "100 100 100".
Passed
Regex should not match "42 42 42 42".
Passed
Regex should not match "42 42".
Passed
Regex should not match "101 102 103".
Passed
Regex should not match "1 2 3".
Passed
Regex should match "10 10 10".
*/

console.log("#32: Use Capture groups to search and replace");
//you can search and replace text in a string using .replace()

let wrongText = "The sky is silver";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex,"blue"));

let huhText = "This sandwich is good";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result41 = huhText.replace(fixRegex, replaceText);
console.log(result41);


console.log("#33:Remove whitespace from start and end");
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result42 = hello.replace(wsRegex, '');
console.log(result42);
