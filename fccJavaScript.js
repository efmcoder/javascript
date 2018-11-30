//#1: Return
function timesFive(num){
  return num * 5;
}
console.log(timesFive(5));

//#2: Testing strict comparison ===
function testStrict(val){
  if (val === 7){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));
//#3.
console.log("#3 done");

//4. Practice comparing different values
function compareEquality(a,b){
  if(a===b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10,"10"));
//ANSWER = NOT EQUAL IF 10,"10"

//#5: Inequality Operator !=
function testNotEqual(val){
  if (val !=99){
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(99));

//#6. Strict Inequality !==
function testStrictNotEqual(val){
  if (val !==17){
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(77));

//#7 Comparison with Greater Than
function testGreaterThan(val){
  if (val > 100) {
  return "100 or over 100";
  }
  if (val > 10) {
return "Over 10 but less than 100";
  }
return "10 or under";
}
console.log(testGreaterThan(55));

//#8 Comparison with Greater Than or Equal to
function greaterThanorEqualTo(val){
  if (val =>10){
    return "Greater Than or Equal to 10";
  }
  if (val <=100){
    return "Less than or Equal to 100";
  }
  return "Less than 10";
}
console.log(greaterThanorEqualTo(12));

//#9 & #10 Comparison with Less Than or Equal to
function lessThanOrEqualTo(val){
  if (val <=100){
    return "Less than or Equal to 100";
  }
  if (val <=10){
    return "Less than or Equal to 10";
  }
  return "Over 100";
}
console.log(lessThanOrEqualTo(120));

//#11 Comparison with Logical && Operator
function testLogicalAnd(val){
  if (val >= 25 && val <=50){
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(15));

//#12: Comparisons with Logical || (or) Operator. Returns true if true
function testLogicalOr(val){
  if (val <10 || val >20){
    return "True";
  }
  return "False";
}
console.log(testLogicalOr(15));

//#13: Else Statements
function testElse(val){
  var result = "";
if (val > 5){
  result = "Bigger than 5"; //WHY IS THIS SHOWN AS RESULT
}
else {
  return "5 or smaller"; //WHY IS THIS SHOWN AS RETURN. WHAT'S THE DIFF?
}
return result;
}
console.log(testElse(4));

//#14: Else if Statements
//Convert below statement to elseif
function elseIf(val){
  if (val > 10){
    return "Greater than 10";
  }
  else if (val < 5){
    return "Less than 5";
  }
  else {
    return "between 5 and 10";
  }
}
console.log(elseIf(7));

//#15: Logical Order in if/else statements
function orderMyLogic(val){
  if (val < 5){
    return "Less than 5";
  }
  if (val < 10){
    return "Less than 10";
  }
  return "Greater than 10";
}
console.log(orderMyLogic(1));
console.log(orderMyLogic(7));
console.log(orderMyLogic(12));

//#16: Chaining if else statements
function testSize(val){
  if (val < 5){
    return "Tiny";
  }
  else if (val < 10){
    return "Small";
  }
  else if (val < 15){
    return "Medium";
  }
  else if (val < 20){
    return "Large";
  }
  else{
  return "Huge";
}
}
console.log(testSize(1));
console.log(testSize(8));
console.log(testSize(13));
console.log(testSize(16));
console.log(testSize(75));

//#17: Golf Code:
function golfScore(par, strokes){
  if (strokes ==1){
    return "Hole-in-one!";
  }
  if (strokes <= par -2){
    return "Eagle";
  }
  if (strokes == par -1){
    return "Birdie";
  }
  if (strokes == par){
    return "Par";
  }
  if (strokes == par +1){
    return "Bogey";
  }
  if (strokes == par + 2){
    return "Double Bogey";
  }
  return "Go Home!";
}
console.log(golfScore(5,4));

//#18: Switch Statements
function caseInSwitch(val){
  var answer = ""; //without this, answer still executes
  switch (val){
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
  }
  return answer;
}
  console.log(caseInSwitch(1));

//#19: Adding a default option in Switch statements
function caseInSwitch2(val){
  var answer2 = "";
  switch (val){
    case 1:
    return "Alpha2";
    break;
    case 2:
    return "Beta2";
    break;
    case 3:
    return "Gamma2";
    break;
    case 4:
    return "Delta2";
    break;
    default:
    return "Not found";
    break;
  }
  return answer2;
}
console.log(caseInSwitch2(0));
console.log(caseInSwitch2(1));
console.log(caseInSwitch2(2));
console.log(caseInSwitch2(3));
console.log(caseInSwitch2(4));
console.log(caseInSwitch2(5));
console.log(caseInSwitch2(100));

//#19: PART II:
function switchOfStuff(val){
  var answer = "";
  switch (val){
    case "a": //must use "a" or will error out as not defined
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  return answer;
}
console.log(switchOfStuff("a"));

//#20: Basic JS: Multiple Identical Options in Switch statements
function sequentialSizes(val){
  var answer = " ";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;

      case 4:
      case 5:
      case 6:
        return "Mid";
        break;

        case 7:
        case 8:
        case 9:
          return "High";
          break;

          default:
          return "U too fat!";
          break;

        }
        return answer;
}
console.log(sequentialSizes(1));
console.log(sequentialSizes(6));
console.log(sequentialSizes(9));
console.log(sequentialSizes(10));

//#21: Replace If Else Chains with Switch
function chainToSwitch(val){
  var answer = "";
  switch (val){
    case "bob":
    return "Marley";
    break;

    case 42:
    return "The Answer";
    break;

    case 1:
    return "There is no #1";
    break;

    case 99:
    return "Missed me by this much!";
    break;

    case 7:
    return "Ate Nine";
    break;

  }
  return answer;
}
console.log(chainToSwitch(7));
console.log(chainToSwitch(42));
console.log(chainToSwitch("bob"));

//#22: Returning Boolean Values from Functions
function isEqual(a,b) {
  if (a === b) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isEqual(1,2));
console.log(isEqual(1,1));

//#22 ALTERNATIVE - PART II
function isEqual2(a,b) {
  return a === b;
}
console.log(isEqual2(3,3));
console.log(isEqual2(2,2));

//#22: Challenge
console.log("Number 22 Challenge");
function isLess(a, b) {
  return a !== b;
}
console.log(isLess(10, 10));

//#23 Return Early Pattern for Functions
console.log("#23: Return for Functions");
function myFun() {
  console.log("Hello");
  return "World";
  console.log("Goodbye");
}
console.log(myFun());
//The above prints out Hello and World to the console, but not Goodbye because the function exits at the return statement
console.log("#23 PART II");
function abTest(a, b) {
if (a < 0 || b < 0) {
  return;
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log(abTest(2,8));
console.log(abTest(3,3));

//#24: Card Counting
console.log("#24: Card Counting");
var count = 0;
function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
}
}
console.log(cc(-3));
console.log(cc(5));
console.log(cc(7));

//#25: JavaScript Objects
console.log("#25: JavaScript Objects");
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};
console.log(cat.name);
console.log(cat.legs);
console.log(cat.tails);
console.log(cat.enemies);

var dog = {
  name: "Woof",
  legs: 3,
  tails: 1,
  friends: "man"
};
console.log(dog.name);

//#26: Accessing Object Properties with Dot Notation
console.log("#26: Accessing Object Properties with Dot Notation");

//#27: Accessing Object properties with Variables
console.log("#27: Accessing Object properties with Variables");
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
var myDog = "Hunter"; //these lines need to be down here because, scope
var myBreed = dogs[myDog];
console.log(myBreed);
//console.log(someObj[someProperty]);

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
//Variables below, need to be below the object because - scope
var playerNumber = 12;
var player = testObj[playerNumber];
console.log(player);

//#28: Updating Object Properties
console.log("#28: Updating Object Properties");
var ourDog = {
  name: "Camper",
  legs: 3,
  tails: 1,
  friends: ["people", "cats", "dolls"]
};
//update his name to Happy Camper
ourDog.name = "Happy Camper";
console.log(ourDog.name);

//#29: Add properties to a JS Object
console.log("#29: Add properties to a JS Object");
ourDog.bark = "bow-wow";
console.log(ourDog.bark);

//#30: Delete properties from JS Object
console.log("#30: Delete properties from JS Object");
delete ourDog.bark;

//MISC
console.log("# Misc");
var city = {
  name: "Cranston",
  village: "Pawtuxet",
  representative: "Langevin",
  county: "Providence",
  avgHomeValue: 250000,
  population: 800000
};
city.myStreet = "Smith"; //adds name of street to object
console.log(city.myStreet); //street name
var myVillage = "village";
var myLocation = city[myVillage];
console.log(myLocation); //village name

//#31: Using Objects for Lookups
console.log("#31: Using Objects for Lookups");
//function phoneticLookup(val){ this line is on FCC but can't get results if I use it here ??
var lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
};

var myTown = "bravo";
var town = lookup[myTown];
console.log(town);
//result = lookup[val]; // from FCC but can't get results when i use it here ??
//}

//#32: Testing Objects for Properties
console.log("#32: Testing Objects for Properties");
var myObj = {
  top: "hat",
  bottom: "pants",
};
console.log(myObj.hasOwnProperty("top")); //hasOwnProperty must be in the library

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
/*console.log(myObj.hasOwnProperty("door"));
function checkObj(checkProp){
  console.log(myObj.hasOwnProperty("pet"));
  return "Change me!";
}
checkObj("gift");
console.log(checkObj("pet"));
console.log(checkObj("bed"));*/

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
    return "Not found";
  }
}
console.log(checkObj("bed"));
console.log(checkObj("table"));

//#33: JS: Manipulating Complex Objects
console.log("#33: JS: Manipulating Complex Objects");
var ourMusic = {
  artist: "Daft Punk",
  title: "Homework",
  release_year: 1997,
  formats: ["CD", "Casette", "LP"]
};
console.log(ourMusic.artist);

//#34: Accessing Nested Objects
console.log("#34: Accessing Nested Objects");
var ourStorage = {
desk: {"drawer": "stapler"},
cabinet:{"top drawer":
    {
      folder1: "a file",
      folder2: "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

console.log("own example of nested objects and access");
var myHouse = {
  floorLevels: 2,
  flooring: "hardwoods",
  heat: "electric",
  washer_dryer: "gas",
  amenities: {
  porch1: "front porch",
  porch2: "back porch",
  fireplace: "unknown",
  in_law:{
  bedrooms: 2,
  ceiling: "gabled"
},
other: "pool"}};
console.log(myHouse.amenities.in_law.ceiling);
console.log(myHouse.floorLevels);
console.log(myHouse.heat);
console.log(myHouse.amenities.in_law.bedrooms);
var inLawRooms = myHouse.amenities.in_law.bedrooms;
console.log("I have " + inLawRooms + " in-law bedrooms at my house");

console.log("fcc access nested object & use brackets");
var myStorage = {
  car: {
    inside: {
      "glove box": "maps", //when there's a space, better to use " "
      "passenger seat": "crumbs"
    },
    outside: {
      "trunk": "jack" //prob better to use " " when nest within a nest
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//#35: Accessing nested arrays
console.log("#35: Accessing nested arrays");
var myPlants = [  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

console.log(myPlants[1].list[1]); //look carefully at how pine is accessed

//#36: FCC Basic JavaScript: Record Collection
console.log("//36: FCC Basic JavaScript: Record Collection");

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
console.log(collection);

//#37: Iterate with JavaScript While Loops
console.log("#37: Iterate with JavaScript While Loops");
var ourArray = [];
var i = 0;
while (i <= 5) {
  ourArray.push(i), i++;
  console.log(i);
}
//prints  to 6 because of the push which adds 1

//#38: Iterate with JavaScript For Loops
console.log("#38: Iterate with JavaScript For Loops");
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

//#39: Iterate EVEN numbers with a For loop
console.log("#39: Iterate EVEN numbers with a For loop");
for (var i = 0; i < 10; i+=2) {
  console.log(i);
}

//#39 PART II: Odd Numbers
console.log("#39 PART II: Odd Numbers");
for (var j = 1; j < 10; j+=2) {
  console.log(j);
}

//#40 Count Backwards with a For Loop
console.log("#40 Count Backwards with a For Loop");
for (var i = 10; i > 0; i--) {
  console.log(i);
}

console.log("#40 Count Backwards with a For Loop EVEN numbers");
for (var i = 10; i > 0; i-=2) {
  console.log(i);
}

console.log("#40 Count Backwards with a For Loop ODD numbers");
for (var i = 9; i > 0; i-=2) {
  console.log(i);
}

console.log("MISC: CREATE PYRAMID WITH A LOOP");
function createPyramid() {
  var rows = 5;
  var arr = new Array();
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <=i; j++) {
      arr.push(j);
      console.log(j);
    }
    console.log("\n");
  }
  console.log(createPyramid);
}

var num = "";
var size = 5;
for(var i=1; i<=size; i++) {
  num = num + i
  console.log(num);
}

console.log("STILL NOT A PYRAMID!")
function generatePyramid(num) {
  let number = '';

  for (let i = 1; i <= num; i++) {
    console.log(number += i);
  }
}
console.log(generatePyramid(10));

console.log("Pyramid, anyone?");
for(var i=1; i<=5; i++){
 var Num='';
 for(var j=0; j<i; j++){
     Num += i;
 }
 console.log(Num);
}

console.log("Better luck with that pyramid?");
var n = 10;
generateNumberTriangle(n);

function generateNumberTriangle(n) {
    var width = (2 * n) -1; // Always the case.
    var midpoint = Math.floor(width / 2); // Middle of pyramid.
    let level = ''; // will be reset each level loop

    for(var i = 0; i < n; i++){ // Looping through levels
        level = '';
        for(var j = 0; j < width; j++){
            if(j < midpoint-i || j > midpoint+i){
                level += '.';
            } else {
                level += '*';
            }
        }
        console.log(level);
    }
}
