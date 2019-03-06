function ascendingOrder(arr){
  return arr.sort(function(a,b){
    return a - b;
  });
}
console.log(ascendingOrder([1,5,2,3,4]));

function reverseOrder(arr){
  return arr.sort(function(a,b){
    return a < b;
  });
}
console.log(reverseOrder(["1","h","z","b","s"]));


//SECTION II
function alphabeticalOrder(arr) {
  // Add your code below this line

  return arr.sort(function(a, b) {
    return a > b;
  });

  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


//WHAT WORKED ON FREECODECAMP
function alphabeticalOrders(arr) {
  // Add your code below this line
  //return arr.sort(function(a,b) {
    //return b - a;

    return arr.sort();
 // });
  // Add your code above this line
}
console.log(alphabeticalOrders(["a", "d", "c", "a", "z", "g"]));
