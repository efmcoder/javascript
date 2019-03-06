var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
//console.log(currentValue);


//EXAMPLE II
function checkPositive(arr) {
  // Add your code below this line
    return arr.every(function(value) {
        return value > 0;
    });
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));
