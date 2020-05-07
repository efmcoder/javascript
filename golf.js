var terms = ["Hole-in-one", "Eagle", "Birdie", "Bogey", "Double Bogey", "Go Home!", "Par"];
function golfScore(par, strokes) {
		if (strokes === 1) {
			return terms[0]; 				//HOLE IN ONE
		} else if (strokes  === 2) {
			return terms[1];				//EAGLE
		} else if (strokes  === par - 1) {
			return terms[2];				//BIRDIE
		} else if (strokes  === par + 1) {
			return terms[3];				//BOGEY
		} else if (strokes  === par + 2) {
			return terms[4];				//DOUBLE BOGEY
		} else if (strokes  >= par + 3 ) {
			return terms[5];
		} else if (strokes  === par) {
			return terms[6];

		} else {
			return "Change Me";	
		}

}
		console.log(golfScore(4,1)); //hole in one 
		console.log(golfScore(4,2)); //eagle 
		console.log(golfScore(5,2)); //eagle 
		console.log(golfScore(4,3)); //birdie 
		console.log(golfScore(4,4)); //par 
		console.log(golfScore(1,1)); //hole in one 
		console.log(golfScore(5,5)); //par 
		console.log(golfScore(4,5)); //bogey 
		console.log(golfScore(4,6)); //double bogey 
		console.log(golfScore(4,7)); //go home 
		console.log(golfScore(5,9)); //go home 

/*
Strokes - return
0, 1 = Hole in one

1, <= par - 2 = eagle
2, par - 1 = birdie
3, par + 1 = bogey
4, par + 2 = double bogey
5, >= par + 3 = go home

*/