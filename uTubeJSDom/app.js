//to get the elements in the html file, you create a variable for them
//var text = document.querySelector("h1"); //you can grab the element directly or u can give it a class in the html and use that
var myHeading = window.document.querySelector(".title"); //give the element you want to change a vrble name
var changeColor = document.querySelector(".buttonColor"); //give the button a variable name


//you can change their styles e.g.
//text.style.color = "red"; //then using the variable name u gave it up there, tell it what to do

//you can also create classes in style.css that can be changed via dom manipulation
//text.classList.add("changeII"); //we created a class called changeIIin style.css. We are applying that class here

//eventlistener: call up the class you want to listen to instructions

changeColor.addEventListener("click", function () { //use variable name to call function
    myHeading.classList.toggle("changeOnClick");
});

var userList = document.querySelectorAll(".name-list li");
console.log(userList);

for (user of userList) {
    user.addEventListener("click", function () {
        this.style.color = "red";
    });
}

var listInput = document.querySelector(".list-input");
//console.log(listInput.value);
var addListBtn = document.querySelector(".addListBtn");
addListBtn.addEventListener("click", function () {
    //create an li
    //add the input value 
    //attach the li to the user list
});