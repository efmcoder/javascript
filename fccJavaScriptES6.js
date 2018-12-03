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
