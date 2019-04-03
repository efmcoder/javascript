
document.querySelector(".clicktheBall").addEventListener("click", function(){ //The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
  if(gamePlaying){
    var ball = Math.floor(Math.random() *6) + 1;

    var ballDom = document.querySelector(".ball");
    ballDom.style.display = "block";
    ballDom.src = "ball-" + ball + ".jpg";


    }
});
