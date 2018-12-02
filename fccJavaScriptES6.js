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
