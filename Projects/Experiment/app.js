
//var bill = 10;
var calc = function(){
var bill = Number(document.getElementById("bill").value);
var tip = bill * 0.15;

//this is playing on the element with id "tip" in index.html (the document)
document.getElementById("tip").innerHTML = "$ " + Number(tip);
}
