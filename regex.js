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
let string4 = "FreeCodeCamp Is Available For World CITIZENS";
let regexStr4 = /citizen/i; //remember to ignore case
console.log(string4.match(regexStr4));
//you can simply log to the console or give the answer a variable as in next line and log that to console
//let result4 = string4.match(regexStr4);
//console.log(result4);


