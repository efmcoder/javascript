//Currying a function means to convert a function of N arity to N functions of arity 1

function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
  // Add your code above this line
}
console.log(add(10)(20)(30));
