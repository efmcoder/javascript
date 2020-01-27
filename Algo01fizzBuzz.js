function fizzBuzz(num){
	for (var i = 1; i <=num; i++){
		if (i % 2 == 0 && i % 5 ==0) 
			console.log("fizzBuzz");
		else if (i % 2 == 0)
			console.log("fizz");
		else if (i % 5 == 0)
			console.log("buzz");
		else console.log(i);
	}
}
fizzBuzz(30); //CALLS THE FUNCTION