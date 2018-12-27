console.log("#1: Create an array");
let myArray = ["Antonio", 34, false, "student", "Brown University"];
console.log(myArray);
console.log(myArray[0]);

console.log("#2: Access Array using BRACKET NOTATION");
let myVariable = myArray[0];
console.log(myVariable);

myArray[0] = "Taylor";
console.log(myArray[0]);

console.log("#3: Add items to Array using push() and unshift()");
//push() adds elements to the end of an array
//unshift() adds elements to the beginning
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
romanNumerals.push("How do");
console.log(romanNumerals);

//PROBLEM (THE BELOW IS NOT PRINTING TO CONSOLE ??)
function mixedNumbers(arr){
  mixedNumbers.unshift("I", 2, "three");
  mixedNumbers.push(7, "VIII", "nine");
  return arr;
}
console.log(mixedNumbers.unshift());
console.log(mixedNumbers.push());
