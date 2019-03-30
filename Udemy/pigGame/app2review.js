var scores, roundScore, activePlayer, gamePlaying;

//active player is to keep track of who is now playing

//select the first player's score
//we want to change the score, so use the syntax textContent
document.querySelector("#current-" + activePlayer).textContent = dice;
