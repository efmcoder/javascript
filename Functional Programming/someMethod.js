var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});


//FCC QUESTION
function checkPositive(arr) {
return arr.some(function(value) {
    return value > 0;
});
}
console.log(checkPositive([1, 2, 3, -4, 5]));


//FCC ALTERNATIVE SOLUTTION
function checkPositiveS(arr) {
return arr.some((elem) => elem > 0);

}
console.log(checkPositiveS([1, 2, 3, -4, 5]));
