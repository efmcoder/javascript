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


var userName
userName ? console.log("Hello " + userName) : console.log("Hello Stranger!");
