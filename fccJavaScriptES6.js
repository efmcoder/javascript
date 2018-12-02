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
