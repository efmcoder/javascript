document.write('<br/>');
var iceCream = "chocolate"; //variable declaration
if (iceCream === "chocolate" ){ //looks like a variable but the () means it's a function
	console.log("I love chocolate!");
  document.write("I love chocolate");
} else {
	console.log("I prefer a different icecream");
  document.write("I prefer other icecream");
}

document.write('<br/>');

//MORE FUNCTIONS
function multiply (x,y){
  var results = x * y;
  return results;
}
console.log("Multiplying gives us " + (multiply(5,6)));
document.write("Multiplying gives us " + (multiply(5,6)));
//look at an alternative at variable level

document.write('<br/>');

var u = 3;
var v = 4;
var result = u * v;
console.log("Multiplication result is " + (result));
document.write("Multiplication result is " + (result));

document.write('<br/>');

function square(x){
  return x*x;
}
console.log("The square is " + (square(5)));
document.write("The square is " + (square(5)));

document.write('<br/>');

function sum(x,y){
  var x;
  var y;
  var result2 = x+y;
  return result2;
}
console.log("The sum is " + (sum(1,3)));
document.write("The sume is " + (sum(1,3)));

document.write('<br/>');

var button = document.querySelector("button");
button.addEventListener("click", event => {
  button.innerHTML = `Click Count: ${event.detail}`;
});

document.write('<br/>');
