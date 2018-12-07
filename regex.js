//test to find a particular word in a string
let string1 = "freecodecamp";
let regexStr1 = /code/;
console.log(regexStr1.test(string1));

//testing to find more than 1 word in the string
let string2 = "freecodecamp is available for world citizens";
let regexStr2 = /code|citizen|is/;
console.log(regexStr2.test(string2));

