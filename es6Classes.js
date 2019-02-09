//How to create a class that can be used to create multiple objects of the same structure
//You can name a class or not name it. Below is a named class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const square = new Rectangle(5,5);
const poster = new Rectangle(2,3);
console.log(square.height);
console.log(poster.width);

//below is an unnamed class
//constuctor is a special method used to create and initialize an object created within a class
//there can only be one constructor in each class
var Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
//const square = new Rectangle(5,5);
const square2 = new Square(5,5)
const poster2 = new Square(2,3);
console.log(square2.height);
console.log(poster2.width);

class Box {
  constructor (height, width, depth){
    this.height = height;
    this.width = width;
    this.depth = depth;
  }
  get area(){ //area is a getter
    return this.calcArea();
}
  get perimeter(){
    return this.calcPerimeter();
  }
  calcArea(){ //calcArea is a method
    return this.height * this.width;
}
  calcPerimeter(){
    return 2*(this.height + this.width);
  }
}

const amazonBox = new Box(5,5,5);
console.log(amazonBox);
console.log(amazonBox.area);
console.log(amazonBox.perimeter);


class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " barks");
  }
}
let d = new Dog("Rex");
d.bark();

//Inheritance
//uses extends keyword to create a child of a class

class Animal {
  constuctor(name){
    this.name = name;
  }
  speak(){
    console.log(this.name + " makes a noise");
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " meows");
  }
}
let c = new Cat("Meow");
c.bark();

//repeat strings
console.log("foo".repeat(3));

//findindex()
let value = [4,5,1,8,2,0].findIndex(x=>x>3);
console.log(value);

let value2 = [4,5,1,8,2,0].find(x=>x>3);
console.log(value2);

const arr1 = [1,2,3];
const arr2 = [5,6,7,8];
let arr3 = [...arr1,4,...arr2];
console.log(arr3);
