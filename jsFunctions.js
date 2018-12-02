/*JS Functions do one of the following:
i) Do not take a parameter nor return anything
ii)

*/


//)i)FUNCTIONS THAT DO NOT TAKE A PARAMETER OR RETURN ANYTHING
console.log("Types of JavaScript Functions");
console.log("(i): FUNCTIONS THAT DO NOT TAKE A PARAMETER OR RETURN ANYTHING");
function sayHello () {
  console.log("Hello!");//needed
}
sayHello(); //Without this, no answer is displayed even with the console.console.log(

console.log("(ii): FUNCTION THAT TAKES A PARAMETER BUT DOES NOT RETURN ANYTHING");
function log(message) {
  console.log(message);
}
log("Hello JavaScript");

console.log("(iii): FUNCTION THAT TAKES A PARAMETER AND RETURNS A VALUE");
function square (number) {
  return number * number;
}
console.log(square(5));

console.log("you can assign a function to a variable");
var square = function (number) {
  return number * number;
}
console.log(square(2));

console.log("(iv) A FUNCTION CAN TAKE MORE THAN ONE PARAMETER");
var sum  = function (){
  result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(1,2,3,4,5)); //to infinity but impractical

console.log("better way to do more than 1 paramenter");
var sum  = function (...args){ //...args is a REST parameter
  result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += args[i];
  }
  return result;
}
console.log(sum(3,4,5)); //to infinity but impractical

console.log("Unnamed Functions - IIFE - Immediately Invoked Funtion Expressions");
(function () {
  var message = "I don't have a name";
  console.log(message);
})
();
