//give the element you want to change a variable name
//In this case we want to change the item with the class name title
var text = document.querySelector(".title");

//give the button a variable name
var changeHeader = document.querySelector(".changeColor");

text.classList.add("change"); //will access all the classes that the text has

//using button variable, create a function
changeHeader.addEventListener("click", function(){
  text.classList.toggle("newStyle");
});
