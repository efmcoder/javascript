//WORKING FUNCTION IS:
/*var calc = function(){
var bill = Number(document.getElementById("bill").value);
//var tip;
*/
var tip;
var bill;

function calculateTip(bill){
  if(bill < 50) {
    tip  = 0.2;
  } else if (bill>=50 && bill<100) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  //return tip;  
 }
 calculateTip(45);
 calculateTip(60);
 calculateTip(150);

/*
var totalBill = tip + bill;

//document.getElementById(calculateTip(30));
document.getElementById("tip").innerHTML = "$ " + Number(tip);
document.getElementById("totalBill").innerHTML = "$ " + Number(totalBill);

}


/*WOULD PREFER TO USE A FUNCTION*/
/*function calculateTip(bill){
  if(bill < 30) {
    tip  = 0.2;
  } else if (bill >=30 && bill < 200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return tip * bill;
}
//call function
console.log(calculateTip(30));*/

