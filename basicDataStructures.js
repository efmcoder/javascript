console.log("#2: Create an array");
let myArray = ["Antonio", 34, false, "student", "Brown University"];
console.log(myArray);
console.log(myArray[0]);

console.log("#3: Access Array using BRACKET NOTATION");
let myVariable = myArray[0];
console.log(myVariable);

myArray[0] = "Taylor";
console.log(myArray[0]);

console.log("#4: Add items to Array using push() and unshift()");
//push() adds elements to the end of an array
//unshift() adds elements to the beginning
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
romanNumerals.push("How do");
console.log(romanNumerals);

//PROBLEM (THE BELOW IS NOT PRINTING TO CONSOLE ??)
function mixedNumbers(arr){
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", "nine");
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

console.log("#5: Remove items from an Array with pop() and shift()");
//shift() Removes from beginning of an array
//pop() Removes from end of an array
function popShift(arr){
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge ", "is ", "not ", "complete"]));

console.log("#6: Remove items using splice()");
//splice() removes from anywhere in array
//splice() can take up to 3 parameters

let array = ["today", "was", "not", "so", "great"];
array.splice(2,2);
console.log(array);
//answer = "today was great"

let array2 = ["I", "am", "feeling", "really", "happy"];
let newArray = array2.splice(2,3);
console.log(newArray);

//PROBLEM
function sumOfTen(arr){
  arr.splice(1,2);
return arr.reduce((a,b) => a + b);
}
console.log(sumOfTen([2,5,1,5,2,1]));

console.log("#7: Add items using splice()");
function colorChange(arr, index, newColor){
  arr.splice(index, 1, newColor);
  return arr;
}
let colorScheme = ["#878787", "#a08794", "#bb7e8c", "#c9b6be", "#d1becf"];
colorScheme = colorChange(colorScheme, 2, "#332327");
console.log(colorScheme);
//this function removes the 2nd indexed item #bb7e8c and replaces it with #332327

//PROBLEM
function htmlColorNames(arr){
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavendarBlush", "PaleTurquoise", "FireBrick"]));

console.log("#8: Copy items using slice()");
/* selects what to copy
slice(), rather than modifying an array, copies, or
extracts, a given number of elements to a new array,
leaving the array it is called upon untouched.
slice() takes only 2 parameters —
the first is the index at which to begin extraction,
and the second is the index at which to stop extraction
(extraction will occur up to, but not including
the element at this index)
*/
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1,3);
console.log(todaysWeather);
//answer = snow, sleet

//PROBLEM
function forecast(arr){
return arr.slice(2,4);
}
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));
//answer = warm, sunny

console.log("#9: Cooy an array with the spread operator");
//copies all an array's elements
//from ES6, the spread operator which looks like this: ...
//allows us to copy all of an arrays elements, in order
//with a simple & readable syntax
//example:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
let thatArray2 = thisArray.slice(0,2);
console.log(thatArray);
console.log(thatArray2)

console.log("#9: PROBLEM CAN BUILD PYRAMID WITH THIS");
//PROBLEM
function copyMachine(arr, num){
  let newArr = [];
  while (num >= 1){
    newArr.push([...arr]); //using push() and spread array
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true],5));

console.log("#10: Combine Arrays with the spread operator");
//another advantage of spread operator is the ability
//to combine arrays or to insert all the elements of
//one array into another, at any index
let scarboroughFair = ["parsley", "sage", "rosemary","thyme"];
let boringSong= ["basil", "cilantro", ...scarboroughFair, "coriander"];
console.log(boringSong);

console.log("#10: Problem");
function spreadOut(){
  let fragment = ["to", "code"];
  let sentence = ["I", "like", ...fragment];
  return sentence;
}
console.log(spreadOut());
//Answer should be: I like to code

console.log("#11: Check for the presence of an element with indexOf()");
//returns the index of the element or -1 if it can't be found
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("dates")); //-1 doesn't exist
console.log(fruits.indexOf("oranges")); //2 index 2
console.log(fruits.indexOf("pears")); //1 index 1-first result

console.log("#11: PROBLEM");
function quickCheck(arr, elem){
  if (arr.indexOf(elem) >=0){
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"],"mushrooms"));

console.log("#12: Iterate through All an Array's items using For Loops");
//can use every() or forEach() or map() or a for Loop

console.log("Example"); //find number greater than 10 in array
function greaterThanTen(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] > 10){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(greaterThanTen([2,12,8,14,80,0,1]));

console.log("PROBLEM"); //BELOW IS NOT RETURNING RESULTS ??
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

 for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
            };
          };

  // change code above this line
  return newArr;
};
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

console.log("#13: Create complex multi-dimensional arrays");
console.log("EXAMPLE - EVEN THEY ADMIT IT'S CONVOLUTED");
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
console.log(nestedArray[2][1][0][0][0]);

//CAN ALSO DO:
/*
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);

*/

console.log("PROBLEM");
/*
We have defined a variable, myNestedArray, set equal
to an array. Modify myNestedArray, using any combination
of strings, numbers, and booleans for data elements, so that
it has exactly five levels of depth (remember, the
outer-most array is level 1). Somewhere on the third level,
include the string 'deep', on the fourth level, include
the string 'deeper', and on the fifth level, include the
string 'deepest'.

*/

let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
  // change code above this line
];
console.log(myNestedArray);

console.log("#14: Add Key-Value pairs to JavaScript Objects");
let FCC_User = {
  username: "efm_Coder",
  followers: 500,
  points: 2000,
  completedProjects: 1
};
//we can access the above object as follows using dot notation:
let userData = FCC_User.followers;
console.log(userData);
//or access via bracket notation:
let userData2 = FCC_User['followers'];//note the use of quotes
console.log(userData2);
/*
'followers' is used wt quotes in bracket notation because:
Notice that with bracket notation, we enclosed followers
in quotes. This is because the brackets actually allow us
to pass a variable in to be evaluated as a property name
(hint: keep this in mind for later!). Had we passed
followers in without the quotes, the JavaScript engine
would have attempted to evaluate it as a variable, and
a ReferenceError: followers is not defined would have
been thrown.
*/

console.log("PROBLEM - add key-value pairs");
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods["bananas"] = 13;
foods["grapes"] = 35;
foods ["strawberries"] = 27;
console.log(foods);

console.log("#15: Modify an Object Nested within an object");
let nestedObject = {
  id: 123456789,
  date: "December 31, 2018",
  data: {
    totalUsers: 100,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
    }
  }
};
console.log(nestedObject.data.onlineStatus.active);

console.log("PROBLEM");
let userActivity = {
  id: 2354654654,
  date: "February 16, 2019",
  data: {
    totalUsers2: 51,
    online2:42,
  }
};
userActivity.data.online2 = 45;
console.log(userActivity);
console.log(userActivity.data.online2);

console.log("#16: Access Property names with bracket notation");
/*example: we have a foods object
and we want to search it for some selected foods
we could create the below
code below will evaluate the value stored in the
selectedFood variable and return the value of that key
in the foods object, or undefined if it's not there

let selectedFood = getCurrentFood(scannedItems);
let inventory = foods[selectedFood];
*/
let juice = {
  passion: 1.15,
  olive: 1.45,
};
function checkInventoryy(scannedItemm){
  return juice[scannedItemm];
}
console.log(checkInventoryy("passion"));

let food = {
  apple: 25,
  orange: 32,
  plum: 28,
  banana: 13,
  grape: 35,
  strawberry: 27
};

function checkInventory(scannedItem){
  return food[scannedItem];

}
delete food.apple;
console.log(food);
console.log(checkInventory("apple"));

console.log("#17: Use delete Keyword to remove object properties");
let foodd = {
  applee: 25,
  orangee: 32,
  plumm: 28,
  bananaa: 13,
  grapee: 35,
  strawberryy: 27
};

function checkInventory(scannedItem){
  return food[scannedItem];

}
delete foodd.applee;
console.log(foodd);

console.log("#18: Check if an Object has a Property");
//if we want to know if an object has a specific property
//2 ways:
//hasOwnProperty()
//"in" keyword
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  }
};

function isEveryoneHere(obj){
  if (users.hasOwnProperty("Alan"))
  {
  return true;
  }
  return false;
  //"Alan" in users;
}
console.log(isEveryoneHere(users));

console.log("#19: Iterate through the Keys of an Object with a for...in Statement");
//iterate thru all the keys within an object
//use a "for...in" statement

let userss = {
  Alann: {
    age: 27,
    online: false,
  },
  Jefff: {
    age: 32,
    online: true,
  },
  Sarahh: {
    age: 48,
    online: true,
  },
  Ryann: {
    age: 19,
    online: false,
  }
};
function countOnline(userss) {
	//let n = 0;
	for (let user in userss) if (userss[user].online) //n++;
	return true;
};
