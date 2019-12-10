var calc = function(){
var bill = Number(document.getElementById("bill").value);
var tip = bill * 0.15;

//this is playing on the element with id "tip" in index.html (the document)
document.getElementById("tip").innerHTML = " $" + Number(tip);


var income = Number(document.getElementById("income").value);
var tax = income * 0.4;

document.getElementById("tax").innerHTML = "$"+Number(tax);

}
