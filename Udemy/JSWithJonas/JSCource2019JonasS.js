var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark/(heightMark * heightMark);
var BMIJohn = massJohn/(heightJohn * heightJohn);
console.log("Mark's BMI is " + BMIMark);
console.log("John's BMI is " + BMIJohn);

if (BMIMark > BMIJohn){
  console.log("Mark's BMI is higher than John's");
}
else {
  console.log("John's BMI is higher than Mark's");
}
