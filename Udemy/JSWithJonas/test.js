//Module I - to add to budget
var budgetController = (function(){
  var x = 23;
  var add = function(a){
    return x + a;
  }
  return { //this publicTest method uses the variables above, but variables above r only accessible in here due to scope. publicTest is however available publicly
    publicTest: function(b){
      return(add(b));
    }
  }
})(); //this type of closure means it's an Immediately Invoked Function Expression (IIFE)

//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
//Module II - to add above module to User interface UI
var UIController = (function(){


})();

//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
//Module III - Connect budgetController to UIController. When u run controller.publicTest() you should get answer that adds var z to var x in module 1.
var controller = (function(budgetCtrl, UICtrl){

  var z = budgetCtrl.publicTest(12);
  return{
    anotherPublic: function(){
      return z;
    }
  }

})(budgetController, UIController);
