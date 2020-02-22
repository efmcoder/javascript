//ASSOCIATIVE ARRAYS
var Bryant = new Array();
Bryant["color"] = "blue";
Bryant["food"] = "pizza";

var LeBron = new Array();
LeBron["color"] = "green";
LeBron["food"] = "cheese";

console.log("Bryant's favorite food is " + Bryant["food"] + " while LeBron's is " + LeBron["food"]);

var Qing = new Array();
Qing["name"] = "Qing";
Qing["code"] = "53841";
Qing["address"] = "1 Main Street,";
Qing["city"] = "Springfield,";
Qing["state"] = "MA";
Qing["zip"] = "02169";

console.log("My new company, " + Qing["name"] + ", is located on " + Qing["address"] + " " + Qing["city"] + " " + Qing["state"] + " " + Qing["zip"]);

var Clients = new Array("ABC", "CBS", "NBC", "Deloitte", "PWC", "Google", "Facebook", "Apple", "Oracle");
console.log(Clients);
console.log(Clients[3]);

var Faith = new Array();
Faith["name"] = "Faith";
Faith["code"] = "02169";
Faith["address"] = "32 Tremont Street,";
Faith["city"] = "Boston,";
Faith["state"] = "MA";
Faith["zip"] = "1001";
Faith["school"] = "Northeastern University";
Faith["marital_status"] = "Single";
console.log(Faith);