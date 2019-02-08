//How to create a class that can be used to create multiple objects of the same structure
//You can name a class or not name it. Below is a named class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
//const square = new Rectangle(5,5);
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
