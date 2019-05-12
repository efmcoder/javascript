var getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  } else{
    console.log("error")
  }
};

var getComputerChoice =>{
  var randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

var determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "Game is a draw!";
  }
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
      return "Computer won!";
    } else {
      "User won!";
    }
  }


  if(userChoice === "paper"){
    if(computerChoice === "scissors){
      return "Computer won!";
    } else {
      "User won!";
    }
  }


  if(userChoice === "scissors"){
    if(computerChoice === "rock"){
      return "Computer won!";
    } else {
      "User won!";
    }
  }
}
