function calc1(num){
  return num * (9/5);
}
console.log("Your number multipled by 9/5 (your result 1) is " + (calc1(15)));

function calc2(celcius){
  return calc1(celcius) + 32;
}
console.log("Your result 1 plus 32 is " + (calc2(15)));
