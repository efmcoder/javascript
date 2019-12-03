//WORKING FUNCTION IS:
var calc = function(){
var bill = Number(document.getElementById("bill").value);
var tip = bill * 0.15;

/* WOULD PREFER TO USE A FUNCTION
var tip = function{
  if(bill < 30) {
    tip  = 0.2;
  } else if (bill >=30 && bill < 200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return tip;
}*/


var totalBill = tip + bill;

document.getElementById("tip").innerHTML = "$ " + Number(tip);
document.getElementById("totalBill").innerHTML = "$ " + Number(totalBill);
}

/*var bill;
var tip = [0.2, 0.15, 0.1];


document.querySelctor("#tip-form").onclick =
function calculateTip(bill){
  if(bill < 30){
    tip = 0.2;
  } else if (bill >=30 && bill <200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return bill+(tip * bill);
}
console.log(calculateTip(75));*/


//FUNCTION BELOW NOT WORKING
/*
var calc = function(){
  var bill = Number(document.getElementById('bill').value);
  var tip = function{
    if(bill < 30) {
      tip = 0.2;
    } else if (bill >=30 && bill < 200) {
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    return tip;
}


//NOT WORKING BELOW
/*
var tip =
function calculateTip(bill){
    if(bill < 30){
      tip = 0.2;
    } else if (bill >=30 && bill <200) {
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    return tip*bill;
    return bill + (tip*bill);
}
console.log("The tip is " + "$" + calculateTip(25));
console.log(calculateTip(80));
console.log(calculateTip(500));

var totalBill = bill + tip;
*/
  /*document.getElementById("tip").innerHTML = "$" + Number(tip);
  document.getElementById("total").innerHTML = "$" + Number(totalBill);*/

//console.log("the tip also is " + "$" + tip);
//console.log(totalBill);

//}
