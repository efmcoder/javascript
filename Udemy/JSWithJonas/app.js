//BUDGET CONTROLLER
var budgetController = (function(){




})(); //this type of closure means it's an Immediately Invoked Function Expression (IIFE)


//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
//UI CONTROLLER
var UIController = (function(){


})();


//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  document.querySelector(".add__btn").addEventListener("click", function(){
    console.log("Button was clicked");
  }) //dot is the class selector

})(budgetController, UIController);
