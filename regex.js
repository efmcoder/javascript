//test to find a particular word in a string
let string1 = "freecodecamp";
let regexStr1 = /code/;
console.log(regexStr1.test(string1));

//testing to find more than 1 word in the string
let string2 = "freecodecamp is available for world citizens";
let regexStr2 = /code|citizen|is/;
console.log(regexStr2.test(string2));

//test and ignore upper or lower case
//you have to add i after the last / or you will get "false = can't be found"
let string3 = "FreeCodeCamp Is Available For World CITIZENS";
let regexStr3 = /code|citizen|is/i;
console.log(regexStr3.test(string3));

//Extract a matching word
//use the word "match" instead of "test"
//Extract "citizen"
//Please note: this finds only the first match, not subsequent matches
let string4 = "FreeCodeCamp Is Available For World CITIZENs made by citizens";
let regexStr4 = /citizen/i; 
console.log(string4.match(regexStr4));
//can find a singular in a plural word but not vice versa. 
//will need an inexact match in order to find e.g citizens in citizen
//you can simply log to the console or give the answer a variable as in next line and log that to console
//let result4 = string4.match(regexStr4);
//console.log(result4);


//Find more than the first match
//will find singular in the plural but not vice versa
let string5 = "FreeCodeCamp (yeah!) Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let regexStr5 = /citizen/ig; //"g" will go GLOBAL. i is to remember to ignore case
console.log(string5.match(regexStr5));


//match anything - use wildcard character the period or dot " . "
let string6 = "FreeCodeCamp (yeah!) Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let string6a = "The CIT group is worried about campaigns";
let regexStr6 = /cit./ig; 
console.log(string6.match(regexStr6));

//MY FAV BELOW, CAN FIND ANYTHING!!!
//match anything - bracket
let string7 = "FreeCodeCamp (yeah!) Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let string7a = "The CIT group is worried about campaigns";
let regexStr7 = /a[a-z]/ig;
let regexStr7a = /w[a-z]/ig; 
console.log(string7.match(regexStr7));
console.log(string7a.match(regexStr7a));

//don't find vowels = use the caret ^ sign
//match vowels only
let string8 = "FreeCodeCamp (yeah!) Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let string8a = "The CIT group is worried about campaigns";
let regexStr8 = /[^aeiou]/ig; //don't find vowels
let regexStr8a = /[!aeiou]/ig; //find vowels only
console.log(string8.match(regexStr8));
console.log(string8a.match(regexStr8a));

//match letters and numbers
let string9 = "FreeCodeCamp5846549 Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let regexStr9 = /[a-z0-9]/ig; 
console.log(string9.match(regexStr9));

//FCC Find a criminal problem
//match characters that occur more than 1 time
//U can use the + for this (but only searches/finds if the character repeats consecutively, not when it's all over the place)
//e.g., /a+/g would find one match in abc and return a.
//because of the +, it would also find a match in aabc and return aa
//if checking string abab, it would find 2 matches and return ["a", "a"] because they r not in a row, there is another character between them.
let string10 = "FCCamp5846549 Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let regexStr10 = /c+/ig; 
console.log(string10.match(regexStr10));
//results: CC, C, c

let string10a = "FCCamp5846549 Is AVAILABLE FOR WORLD CITIZENs made by citizens";
let regexStr10a = /[c+]/ig; 
console.log(string10a.match(regexStr10a));
//results: C, C, C, c

