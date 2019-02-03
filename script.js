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

//INDEX: to print Hi There 3 times
/*var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++){
  arr[x].innerHTML = "Hi There";
}*/

//INDEX & CSS: to move little box to the right incrementally
//In order to work here, resolve how box.style below can read style.css file
/*var t = setInterval(move, 500);
var pos = 0;
var box = document.getElementById("box");

function move(){
  pos +=1;
  box.style.left = pos+"px";
}
*/
