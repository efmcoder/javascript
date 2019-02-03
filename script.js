document.write("LEARN: Date Methods");
document.write("<br>");
document.write("<br>");
var d2 = new Date().toLocaleString();
document.write(d2);
console.log(d2);

document.write("<br>"); //to create space between elements in HTML file

var d3 = new Date();
var hours = d3.getFullYear();
console.log(hours);
document.write(hours); //code to publish on website / HTML

//console.log("Alert in JS file or in HTML file");
//alert("Alert we've got JS onboard");

var t = setInterval(move, 500);
var pos = 0;
var box = document.getElementById("box");

function move(){
  pos +=1;
  box.style.left = pos + "px";
}
