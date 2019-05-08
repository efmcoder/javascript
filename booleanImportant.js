// JavaScript source code
var age = prompt("How old are you?");

var isAdult = (age >= 18);
//console.log("is adult");

var isMinor = (age < 18);
//console.log("is not adult");

console.log("User is an adult: " + isAdult);

var isTen = (age == 10);
console.log("User is exactly 10 years old: " + isTen);

var isNotCentanarian = (age < 100);
console.log("User is NOT a centanarian: " + isNotCentanarian);
