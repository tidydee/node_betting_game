var prompt = require('prompt');

function playerBudgetCal(gameMoney,playerWealth) {
  playerWealth += gameMoney; 

  return playerWealth;
}

function winnings(bet,guessNumber,randomNumber) {
  var playerWinnings = bet;

  if (guessNumber == randomNumber) {
    playerWinnings = (playerWinnings * 2);
  }
  else if (Math.abs(guessNumber - randomNumber) == 1) {
    playerWinnings = (bet * 0); 
  }
  else {
    playerWinnings = (0 - bet);
  }

  return playerWinnings;
}

var playerWealth = 100;

gameRound();

function gameRound(){
  console.log('Your current wealth is: $' + playerWealth + '. The aim of the game is to guess the right number.\n');

  // # Prompt Starts
  console.log("Please place a bet between $5 and $10. If you guess the right number, I will double your bet. If your guess is off by 1, then it's a draw. If your guess is off by more than 1, I win, and you lose your money.\n");

  prompt.start();
  prompt.get('betPlaced', function (err,bet){
    if (err) throw (err);
    console.log(bet);
    
    // # Prompt for Number Guess
    console.log("Guess a number between 1 - 10 \n");
    prompt.get('numberGuess', function (err,guess){
      if (err) throw (err);
      console.log(guess);
    
      // var randomNumber = 5;
      var randomNumber = Math.floor((Math.random()*10)+1);

      var gameMoney = winnings(bet.betPlaced, guess.numberGuess, randomNumber);
      playerWealth = playerBudgetCal(gameMoney,playerWealth);

      console.log('The wining number is: ' + randomNumber +'\n');
      console.log('You just made: $' + gameMoney);

      if (playerWealth > 0) {
        gameRound();
      }
    });
  });
}
 