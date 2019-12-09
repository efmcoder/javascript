//WORKING FUNCTION IS:
var calc = function(){
var bill = Number(document.getElementById("bill").value);
var tip = bill * 0.15;

var totalBill = tip + bill;

document.getElementById("tip").innerHTML = "$ " + Number(tip);
document.getElementById("totalBill").innerHTML = "$ " + Number(totalBill);

}


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
