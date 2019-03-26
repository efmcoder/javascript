/*html attributes are e.g.,
class
id
src
alt*/
//id names must be unique, but class names can be reused
//class names are mostly used to connect css to html. U can use id also, but class is most commonly used
//in css * is the universal selector

//keep track of player scores. There are 2 players

var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0; //first player

dice = Math.floor(Math.random()*6) + 1;
console.log(dice);

//DOM Manipulation achieved through document.querySelector
document.querySelector()
