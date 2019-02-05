let arr = [1,2,3];
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

let obj = {
  a: 1,
  b: 2,
  c: 3
};
for (let j in obj){
  console.log(j); //if u do j+j u will concatenate
}

//New for...of loop...uses new "val" keyword
let list = ["x", "y", "z"];
for (let val of list){
  console.log(val);
}

for(let ch of "hello"){ //ch is character. Characters that make up the word hello
  console.log(ch);
}

//word count found accidentally. Not sure how apt it is
var word = "juicy";
for (k = 0; k < word.length; k++){
  console.log(k);
}
