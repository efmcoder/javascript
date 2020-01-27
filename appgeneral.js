var cars = ["BMW", "Volvo", "Subaru", "Saab", "Toyota", "Lexus", "Mazda"];
for (i = 0; i < cars.length; i++){
	console.log(cars[i]) + "<br>";
}

console.log("\n");

function calcArea(x,y){
	let Area = x * y;
	return Area;
}
console.log(calcArea(2,3));