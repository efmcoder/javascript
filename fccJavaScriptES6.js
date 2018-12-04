console.log("#1: using let vs var");
let camper = "James";
console.log(camper);

console.log("#2: Compare scopes of var and let");
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope is: ", + i );
  }
  console.log("Function scope i is: " + i);
  return i;
}
console.log(checkScope());

console.log("#3: CONST is a read-only variable. CAPS");
/*Use let when you want the variable to change,
and const when you want the variable to remain constant.
Also, rename variables declared with const to conform
to common practices, meaning constants should be in all
caps.*/
function printManyTimes (str) {
  "use strict";
  const SENTENCE = str + " is really cool";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
console.log(printManyTimes("freecodecamp"));

console.log("#4: Mutate an Array Declared with const");
/*OBJECTS (ARRAYS & FUNCTIONS) ASSIGNED TO A VARIABLE USING
CONST ARE STILL MUTABLE*/
"use strict";
const s = [5,6,7];
s[2] = 45;
console.log(s);
/*AS SHOWN ABOVE, YOU CAN MUTATE THE ITEMS INSIDE The
ARRAY/OBJECT BUT YOU CANNOT ASSIGN s TO ANYTHING ELSE */

const t = [5,7,2];
function editInPlace() {
  "use strict";
t[0] = 2;
t[1] = 5;
t[2] = 7;
}
console.log(editInPlace(t));

console.log("#5: Prevent Object Mutation");
//with const you can still change the value of the variable
//so use function Object.freeze to prevent data Mutation
let obj = {
  name: "FreeCodeCamp",
};
Object.freeze(obj);
obj.review = "bad";
obj.name = "test";
console.log(obj);
//with object.freeze, nothing changes in the obj Object.
//without object.freeze, the name will change to test and a new property, "review" with value "bad" will be added
//below code is not working though it does on FreeCodeCamp
/*function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);//R WE FREEZING THE FUNCTION OR THE CONST? LOOKS LIKE THE CONST
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
*/
/*console.log("#6: Arrow functions to write concise anonymous functions");
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
you can write above as follows:
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
//or you can write as follows when there is no body:
const myFunc = () => "value";
//RE-WRITE:
var magic = function() {
  "use strict";
  return new Date();
};
//RE-WRITTEN AS:
const magic = () => {
  return new "Date";
}
*/
/*
console.log("#7: Arrow functions with parameters");
//re-write below with arrow FUNCTIONS
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
//re-WRITTEN
//(i) change var to constant

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
PASSED ON FIRST TRY!*/

/*
console.log("#8: Write higher order arrow functions");
//RE-WRITE:
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
//RE-WRITTEN:
const squaredIntegers = arr.filter( (num) =>
num > 0 && num % parseInt(num) === 0 ).map( (num) =>
Math.pow(num, 2) );
*/

/*
console.log("#9: Set default parameters for your functions");
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("Faith"));
console.log(greeting());

//Rewrite the below:
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();

//Re-written code is:
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
*/
/*
console.log("#10: USe the Rest Operator with Function Parameters");
//Re-write this code:
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
//Re-written code
function sum(...args)
{
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
*/

/*
console.log("#11: The spread operator - Adding arrays the hard way");
function addNumber(a,b,c) {
  console.log(a+b+c);
}
var nums = [3,4,5];
addNumber(nums[0], nums[1], nums[2]);

console.log("Now use the spread operator to make above code simpler and easier");
//what you do is use three dots, then the name of the array as follows:
// addNumber(...nums);
//and remove the formula that is adding up the array numbers
function addNumber(a,b,c) {
  console.log(a+b+c);
}
var nums = [3,4,7];
addNumber(...nums);
//works great!

//freecodecamp solution:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = arr1;
(function() {
  "use strict";
 () => [...arr1]; // change this line

})();
console.log(arr2);
*/

/*
console.log("#12: Use Destructuring Assignment to Assign Variables from Objects");
var alphabet = {x:3.6, y:7.4, z:6.54};
//now using ES6 destructuring syntax:
const {x, y, z} = alphabet;
const {x:a, y:b, z:c} = alphabet;
console.log(alphabet);

//freecodecamp example

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

//SOLUTION:
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
*/

/*
console.log("#13: Destructuring assignment to assign variables from nested objects");
//example
const a = {
  start: {x:5, y:6},
  end: {x:6, y: -9}
};
const {start: {x: startX, y:startY}} = a;
console.log(startX, startY);

//problem & solution
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  //const maxOfTomorrow = undefined; // change this line
 const { tomorrow: { max: maxOfTomorrow } } = forecast;
  // change code above this line
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
*/

/*
console.log("#14: Use destructuring assignment to assign variables from Arrays");
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//a is assigned the first value, b is assigned the second
//answer is 1, 2
*/

/*
//access the value at any index wt Destructuring
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//answer is 1, 2, 5
//just use commas?

// QUESTION:
//use destructuring assignment to swap the values
//of a and b so that a receives the value stored
//in b and b receives the value stored in a:
let a = 8, b = 6;
(() => {
  "use strict";
[b,a] = [a,b];
})();
console.log(a);
*/

console.log("#15: Use destructuring assignment with the Rest operator to reassign array elements");
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  //arr = list; // change this
    const [a, b, ...arr] = list; //solution line
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(removeFirstTwo(source));
//answer: [3, 4, 5, 6, 7, 8, 9, 10]

/*
console.log("#17: Use destructuring Assignment to pass an object as a function's parameters");

const profileUpdate = (profileData) => {
  const {name, age, nationality, location} = profileData;
}
//or
const profileData ({name, age, nationality, location}) => {

}*/

console.log("#18: Create strings using template literals");
const person  = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting);

/*
//Problem:
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  //const resultDisplayArray = null;
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
//const resultDisplayArray = makeList(result.failure);

console.log("#19: Write concise object literal declarations using simple fields");
//Problem:
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

console.log("#20: Write Concise declarative functions with ES6");
const person2 = {
  name: "Taylor",
  sayHello: function(){
    return `Hello! My name is ${this.name}`;
  }
};

//Above can be re-written as below. Remove function
const person3 = {
  name: "Taylor",
  sayHello(){
    return `Hello! My name is ${this.name}`;
  }
};

console.log("#21: Use class syntax to define a constructor function");
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus);
//Answer: SpaceShuttle {targetPlanet: 'Jupiter'}

//Above can be re-written as follows using class
class SpaceShuttle2 {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus2 = new SpaceShuttle2('Jupiter');
console.log(zeus);
//The class keyword declares a new function
//Constructor added which would be invoked when new is called to create a new object

//Problem:
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

console.log("#22: Getters and Setters to control access to an object");
/*class Book {
  constructor(author) {
    this.author = author;
  }
  //getter
  get writer(){
    return this._author;
  }
  //setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
console.log(lol.writer);
lol.writer = "wut";
console.log(lol.writer);
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
      constructor(farenheit){
        this.farenheit = farenheit;
      }
      get temperature(){
        return 5 / 9 * (this.farenheit - 32);
      }
      set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
    }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log("#23: Understand the difference btw import and require");
//used as:
//import {countItems} from "math_array-functions"
