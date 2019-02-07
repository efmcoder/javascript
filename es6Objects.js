let tree = {
  height: 10,
  color: "green",
  grow(){
    this.height +=2;
  }
};
tree.grow();
console.log(tree.height);

let height = 5;
let health = 100;
let athlete = {
  height,
  health
};
console.log(athlete);

var a = {
  x:1,
  x:2,
  x:3,
  x:4
}
console.log(a);

//Computer property names use square bracket notation []
let prop = "name";
let id = "1234";
let mobile = "08923";
let store = "Amazon";
let user = {
  [prop]: "Jack",
  [`user_${id}`]: `${mobile}`
};

let id2 = "2345";
let mobile2 = "18923";
let store2 = "Amazon";
let user2 = {
  [prop]: "Mary",
  [`user_${id}`]: [`${mobile}`] //: `${store2}`
};

let id3 = "3456";
let mobile3 = "28923"
let user3 = {
  [prop]: "Susan",
  [`user_${id3}`]: `${mobile3}`
};

let id4 = "4567";
let mobile4 = "38923"
let user4 = {
  [prop]: "Tom",
  [`user_${id4}`]: `${mobile4}`
};

let id5 = "5678";
let mobile5 = "48923"
let user5 = {
  [prop]: "Jonathan",
  [`user_${id5}`]: `${mobile5}`
};
console.log(user);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

//Try this to see if we can figure out what people bought where
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,

};
console.log(i);
console.log(a);

var param = "size";
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase()+ param.slice(1)]:4
};
//what this code is doing:
//string name is mobile
//then it's adding the param (parameter) with string name 'size'
//then it's taking that size and upper-casing the first element, element 0
//it then removes the lower-case 2 via the slice
console.log(config);

//OBJECT ASSIGN() IN ES6
//Object.assign()
//allows us to combine multiple sources into 1 target to create a single, new OBJECT
//also create a duplicate of an object
let person  = {
  name: "Jack",
  age: 18,
  sex: "male"
};

let student = {
  name: "Bob",
  age: 20,
  xp: "2"
};
let newStudent = Object.assign({}, person, student);
console.log(person, newStudent);
//looks like the {} are to indicate u r assigning an entire object
//person goes first, student comes secon in the object.assign variable


const obj1 = {
  a: 0,
  b: 2,
  c: 4
}
const obj2 = Object.assign({c:5, d:6}, obj1);
console.log(obj2.c, obj2.d);

//ARRAY DESTRUCTURING
let arr = ["Donna", "Malala", "Kofia"];
let [one, two, three] = arr;
console.log(one);
console.log(two);
console.log(three);
//answer: Donna Malala Kofia

let b = () => {
  return [1,3,2];
};
let [six, , seven] = b();
console.log(six, seven);
console.log(six);
console.log(seven);


//ARGUMENTS Object
//was used to pass a variable number of arguments to a function
function containsAll(arr){
  for (let k = 1; k < arguments.length; k++){
    let num = arguments[k];
    if (arr.indexOf(num) === -1){
      return false;
    }
  }
  return true;
}
let x = [2,4,6,7];
console.log(containsAll(x,2,4,7));
console.log(containsAll(x,6,4,9));

//via ES6
//...nums is called the rest parameter
// the tree dots ... are called the Spread Operator
function containsAll2(arr, ...nums){
  for (let num of nums){
    if (arr.indexOf(num) === -1){
      return false;
    }
  }
  return true;
}
let u = [2,4,6,7];
console.log(containsAll2(u,2,4,7));
console.log(containsAll2(u,6,4,9));

//QUESTION FROM APP
function magic(...nums){
  let sum  = 0;
  nums.filter(n=>n%2 == 0).map(el=> sum+=el);
  return sum;
}
console.log(magic(1,2,3,4,5,6));
//ANSWER: 12
//EXPLANATION: First remove items that do not
//fully divide up by 2 to give 0
//these items are 1,3,5,
//so items divisible by 2 are 2,4,6
//next, sum up these numbers so 2+4+6 = 12
