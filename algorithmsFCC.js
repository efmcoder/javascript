console.log("#1: Convert Celcius to Fahrenheit");
function convertToFahrenheit(Celcius){
  let Fahrenheit = (Celcius*9/5)+32;
  return Fahrenheit
};
console.log(convertToFahrenheit(82));

console.log("learn how to write functions");


function square(number){
  return number * number;
};
console.log(square(30));

function rectangle(num){
  rectangle = num + num;
  return rectangle;
};
console.log(rectangle(2));

console.log("#2: Reverse a String");
function reverseString(str){
  return str.split("").reverse().join("");
  return str;
};
console.log(reverseString("hello"));

function splitString(name){
  let splittString = name.split("");
};
console.log(splitString("hello"));

console.log("How To Reverse");
var faith2 = ["female", 29, "teacher"];
console.log(faith2);
var reverseFaith = faith2.reverse();
console.log(reverseFaith)

console.log("How To Split");
var faith = "faith";
var splitFaith = faith.split(""); //no space separates each letter
console.log(splitFaith);

console.log("How to remove chars and spaces");
var item = "56DD/AD*TGT";
console.log(item);
var removeChars = /\s*(?:;|$)\s*/;
var itemList = item.split(removeChars);
console.log(item);
