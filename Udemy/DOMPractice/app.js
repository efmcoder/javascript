var hitBall;

init();

document.querySelector(".BounceTheBall").addEventListener("click", function(){
  if (hitBall){
    // 1. Random number
    var ball = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var ballDOM = document.querySelector('.ball');
    ballDOM.style.display = 'block';
    ballDOM.src = 'ball-' + ball + '.png';

/*
    //3. Update the round score IF the rolled number was NOT a 1
    if (ball !== 1) {
        //Add score
        roundScore += ball;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }*/
}
});
