var blueBall, redBall;

init();
document.querySelector(".clicktheBall").addEventListener("click", function(){


  var ballDom = document.querySelector(".ball");
  ballDom.style.display = "block";
  ballDom.src = "ball-" + ".jpg";


  if(clickBall){
    ball += ball-2;
    document.querySelector("#blueBall").textContent = ball;
  }
})

//select the ball
document.querySelector(".ball").textContent = ball;
