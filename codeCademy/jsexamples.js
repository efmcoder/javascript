let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//check if a variable exits
let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}


//truthy and falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//short circuit evaluation
let tool = ''; //change to "marker" to see the change

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

//ternary operators
//original code
let isNightTime = true;
if(isNightTime){
  console.log("Turn on the lights");
} else {
  console.log("Turn off the lights");
}

//writing above in ternary format:
isNightTime ? console.log("Turn on the lights") : console.log("Turn off the lights");


//PARAMETERS & ARGUMENTS
function sayThanks(name) {
  console.log("Thank you for your purchase " + name + "! We appreciate your business");
}
sayThanks("Cole"); //calls the function. If u don't have this, the console.log above will not print to console as it will not call the function

//DEFAULT PARAMETERS IN ES6
function makeShoppingList(item1="milk", item2="bread", item3="eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

function calculateArea(w, h){
  var Area = w * h
  return Area;
}
console.log(calculateArea(2,3));


function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  //return width * height;
}

function monitorCount(rows, columns){
  let number = (rows * columns)
  return number;
}
console.log(monitorCount(5,2));



function monitorCounts(rows, columns) {
  return rows * columns;
}
const numOfMonitorss = monitorCounts(5, 2);
console.log(numOfMonitorss);

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * (200);
	const totalCost = costOfMonitors(5,4);
}
console.log(costOfMonitors(5,4));

//FUNCTION EXPRESSION - FUNCTION INSIDE A VARIABLE
//Function has no name, so is an anonymous function
const plantNeedWater = function(day){
  if(day === "Wednesday"){
    return true;
  } else {
    return false;
  }
};
plantNeedWater("Tuesday");
console.log(plantNeedWater("Tuesday"));
