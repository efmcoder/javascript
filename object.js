function person(name, age){
	this.name = name;
	this.age = age;
}

var kimani = new person("Kimani Muthuri", 39);
var wangui = new person("Wangui Mungai", 38);


console.log(kimani.name, kimani.age);
console.log(wangui.name, wangui.age);
console.log(kimani.name + " loves " + wangui.name);


function people(name, age){
	this.name = name;
	this.age = age;
}

function yearsLeft(){ //add a method to the object
	var numYears = 65 - this.age;
	return numYears;
}

var kobe = new people("Kobe Bryant", 41);
console.log(kobe.name + " is " + kobe.age + " years old");


//ASSOCIATIVE ARRAYS
var Bryant = new Array();
Bryant["color"] = "blue";
Bryant["food"] = "pizza";

var LeBron = new Array();
LeBron["color"] = "green";
LeBron["food"] = "cheese";

console.log("Bryant's favorite food is " + Bryant["food"] + " while LeBron's is " + LeBron["food"]);