//PYRAMID USING FUNCTION
function createEgpytPyramid(steps){
for(var i = 0; i < steps; i++ ){
var height = "";//will read what's in your function parameter and set that as the height of the pyramid
  for(var j = 0; j<steps-i; j++){
      height+=" "; //creates the left slope
  }
  for(var k = 0; k<=i; k++){
    height+= "x ";//creates the right slope
  }
    console.log(height);
}
}createEgpytPyramid("5")


console.log("\n")

//SAME PYRAMID AS ABOVE BUT WITHOUT FUNCTION
for(var i = 0; i < 5; i++ ){
var height = "";//will read what's in your function parameter and set that as the height of the pyramid
  for(var j = 0; j<5-i; j++){
      height+=" "; //creates the left slope
  }
  for(var k = 0; k<=i; k++){
    height+= "x ";//creates the right slope
  }
    console.log(height);
}


console.log("\n")

//SAME PYRAMID AS ABOVE USING REGULAR VERBIAGE
for(var i=0; i<5; i++){
 var Num="";
 for(var j=0; j<5-i; j++){
     Num += " ";
 }
 for (var k=0;k<=i;k++){
   Num += "x ";
 }
 console.log(Num)
}

 console.log("\n")
//UPSIDE DOWN PYRAMID
 for(var i=4; i>=0; i--){//only this changes from right side up pyramids
  var Num="";
  for(var j=0; j<5-i; j++){
      Num += " ";
  }
  for (var k=0;k<=i;k++){
    Num += "x ";
  }
  console.log(Num) }
