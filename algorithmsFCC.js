console.log("#1: Convert Celcius to Fahrenheit");
function convertToFahrenheit(Celcius){
  let Fahrenheit = (Celcius*9/5)+32;
  return Fahrenheit
};
console.log(convertToFahrenheit(82));

console.log("learn how to write functions");


function square(number){
  return number * number;
};
console.log(square(30));

function rectangle(num){
  rectangle = num + num;
  return rectangle;
};
console.log(rectangle(2));

console.log("#2: Reverse a String");
function reverseString(str){
  return str.split("").reverse().join("");
  return str;
};
console.log(reverseString("hello"));

function splitString(name){
  let splittString = name.split("");
};
console.log(splitString("hello"));

console.log("How To Reverse");
var faith2 = ["female", 29, "teacher"];
console.log(faith2);
var reverseFaith = faith2.reverse();
console.log(reverseFaith)

console.log("How To Split");
var faith = "faith";
var splitFaith = faith.split(""); //no space separates each letter
console.log(splitFaith);

console.log("How to remove chars and spaces - NOT REALLY CORRECT");
var item = "56DD/AD*TGT";
console.log(item);
//var removeChars = /\s*(?:;|$)\s;

//var itemList = item.split(removeChars);
console.log(item);



console.log("REVERSE A STRING PROBLEM - #1: SPLIT ONLY");
function reverseString(str){
  return str.split("");
  return str;
}
console.log(reverseString("jasmine"));

console.log("REVERSE A STRING PROBLEM - #2: REVERSE");
console.log("YOU USE: .reverse()");
  var word = ["jasmine","tommy", "jackie"];
  var reversed = word.reverse();
  console.log(reversed);


  console.log("REVERSE A STRING PROBLEM");
  function reverseString(str){
    return str.split("").reverse().join("");
    return str;
  }
  console.log(reverseString("jasmine"));

console.log("#3: Factorialize a Number");
function pocahontas(num){
  if (num ===0) {
    return 1;
  }
  return num * pocahontas(num-1);
}
console.log(pocahontas(5));

console.log("#4: Find the longest word in a string");
// first, create a variable eg: var words = "Madam, I'm Adam"
//secondly, split the variable into an array of words
//i.e., var words = str.split("Madam, I'm Adam");
//third, reiterate through string using a for loop

function findLongestWordLength(str){
var words = str.split(" "); //must have space btw quotes
var maxLength = 0; //what's the purpose of this?

for (var i = 0; i <words.length; i++){
  if (words[i].length > maxLength){
    maxLength = words[i].length;
  }
}
return maxLength;
}
console.log(findLongestWordLength("Madam, I'm Adam"));

//before you split, u must first define the variable
console.log("HOW TO SPLIT");
//str.split()
var nonsense = "maybe i am overthinking this";
var array = nonsense.split(" ");
console.log(array);

var a = 0, b =10;
var a = b++;
//document.write(a);
console.log(a);
console.log(b);
var result = 20;
result *=5;
console.log(result);

console.log("Simple count loop");
for (var i = 0; i <=10; i++ ){
  console.log(i);
}
for (var j = 10; j>0; j--){
  console.log(j);
}

var k=1 ;
while (k<=5){
  console.log(k);
  k=k+1;
}

for (var y = 0; y <=20; y +=3){
  console.log(y);
}

console.log("find output");
var sum = 0;
for(i=4; i<8;i++){
  if(i==6){
    continue;
  }
  sum+=i;
}
console.log(sum);

console.log("output of new code");
var x = 0;
while(x<6){
  x++;
}
console.log(x);

console.log("from cell phone");
var course = {name: "JS", lessons:41};
console.log(course.name.length);

console.log("object constructor, this keyword and new keyword");
function person (name, age, status){
  this.name = name;
  this.age = age;
  this.status = status;
}
var p1 = new person("Tom", 55, "single");
var p2 = new person("Amy", 29, "married");
console.log(p1.name + " is " + p2.status + " to " + p2.name);
console.log(p2.age);
console.log(p1);


console.log("Methonds are functions placed inside objects");
function persons(name, age){
  this.name = name;
  this.age = age;
  //method inside object starts below
  this.changeName = function (name){
    this.name = name;
  }
}
var p = new persons("Pocahontas", 27);
p.changeName("Rosie");
console.log(p.name);

var c1 = ["HTML", "CSS", "JavaScript"];
console.log(c1.length);
var c2 = ["Python", "Java", "C++"];
var courses = c1.concat(c2);
console.log(courses);

console.log("In Associative Arrays as shown below, index numbers are replaced with strings");
var mundu = [];
mundu["name"] = "Wanjiku";
mundu["age"] = 20;
console.log(mundu["age"]);
//better to use an object when you want the index to be a string(text)
//better to use an array when you want the index to be a number

console.log("Math Object");
var n1 = Math.sqrt(4);
var n2 = Math.random(); //returns number btw 0 and 1
var n3 = Math.ceil(Math.random()*10);
console.log(n1, n2, n3);

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

function myAlert(){
  alert("Hi");
}
setInterval(myAlert, 3000);
//1000ms = 1 second
//above code will call the alert function every 3 seconds

//how to write a functions
function name(){
  //what u want to say
}

//how to write a setInterval function
function calc(){
  setInterval(calc, 2000);
}
console.log(calc);
