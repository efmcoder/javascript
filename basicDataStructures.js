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
/*
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
