console.log("#4: Use typeof");
console.log(typeof ""); //string
console.log(typeof 0); //number
console.log(typeof []); //object
console.log(typeof {}); //object

let seven = 7;
console.log(typeof seven);

console.log("I\'ve had a perfect day before, this wasn\'t it.");

console.log("# : Missing open and close parenthesis after function call");
function getNine(){
let x = 6;
let y = 3;
return x + y;
}
let result = getNine();
console.log(result);

function getSum(x,y){
  return x + y;
}
let result2 = getSum(6,3);
console.log(result2);

console.log("# : OBOE errors");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++){
  console.log(alphabet[i]);
}

/*let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;*/
for (let j = 1; j <= len; j++){
  console.log(alphabet[j]);
}

console.log("use k");
for (let k = 0; k < len; k++){
  console.log(alphabet[k]);
}

console.log("# : Reinitializing variables inside a loop");
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {
  let row = [];
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
