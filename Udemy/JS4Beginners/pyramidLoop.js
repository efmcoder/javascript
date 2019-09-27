function createEgpytPyramid(steps)
{
for(var i = 0; i < steps; i++ ){
var height = " ";//will read what's in your function parameter and set that as the height of the pyramid
  for(var j = 0; j<steps-i; j++){
      height+=" "; //creates the left slope
  }
  for(var k = 0; k<=i; k++){
    height += "x ";//creates the right slope
  }
    console.log(height);
}
}
createEgpytPyramid("5")

function createPyramid(rows)
{
for(var i=0;i<rows;i++) {
var output=" ";
    for(var j=0;j<rows-i;j++) {
        output+=" ";//creates the left slope
    }
    for(var k=0;k<=i;k++) {
       output += "x ";//creates the right slope
    }
    console.log(output);
}
}
createPyramid('5')
