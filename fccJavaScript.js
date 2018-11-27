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
