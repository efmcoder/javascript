var num = 0;
while(num < 5){
  console.log(num);
  num++;
}
console.log("\n");

var count = 10;
while(count >= 0){ //equal sign should be after the > sign or else...forever loop!
  console.log(count);
  count--;
}

console.log("\n");
//DO WHILE LOOP EXECUTES THE CODE FIRST
var i = 0;
do{
  console.log(i);
  i++;
} while(i<7);

console.log("\n");

//while loop to loop through things
var array = ["Mercedes", "Volvo", "Subaru", "Toyata", "Lexus", "BMW"];
while(i< array.length){
  console.log(array[i]);
  array++;
}
