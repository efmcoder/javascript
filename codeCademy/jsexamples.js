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
