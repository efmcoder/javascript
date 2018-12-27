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
