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
