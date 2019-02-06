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
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]:4
};
//what this code is doing:
//string name is mobile
//then it's adding the param (parameter) with string name 'size'
//then it's taking that size and upper-casing the first element, element 0
//still figuring out the param slice bit
console.log(config);
