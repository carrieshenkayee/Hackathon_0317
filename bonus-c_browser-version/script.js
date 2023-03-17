const options = ["rock", "paper", "scissors"];

function computerPlay() {
  /*
  TODO: Insert your code for your function that randomly generates a computer move here (from task 4). 
  
  This function should use the return keyword to return a string of either "rock", "paper", or "scissors".
  */

  function gameRockPaperScissors(options) {
    let randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber]; 
  }

  

  //let playerMove = prompt("Let's play rock, paper and scissors! What do you choose? (type 'rock' or 'paper' or 'scissors'.)") 
  //console.log(playerMove)

}
function playRound(playerSelection, computerSelection) {
  let rock = 0; paper = 1; scissors = 2
  let result = playerSelection % 3 - 

  /*function game(playerSelection, computerSelection) {

    if (userChoice === 3 && computer === 1){
      return `User chose ${userChoice}, Computer chose ${computer}, user Wins!`
    }else if (computer === 3 && userChoice === 1){
      return `User chose ${userChoice}, computer chose ${computer}, Computer Wins!`
    }else if (userChoice < computer){
      return `Player chose ${userChoice}, Computer Chose ${computer} User Wins! :D`;
    } else if (userChoice === computer) {
      return `It's a draw!`
    }else {
      return `Player chose ${userChoice}, Computer Chose ${computer} Computer wins :(`;
    };
  }*/
  



  /*
  TODO: Insert your code for your function that decides who the winner is here (from task 2). 

  This function should take in two moves (the player's move and the computer's move) and return a string with the game result.

  For example, if the player's move is rock and the computer's move is scissors, the function should use the return keyword to return "You win!"
  */
}
function updateResultText(result) {
  const resultText = document.getElementById("result-text");
  resultText.textContent = result;
}
function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  updateResultText(result);
}
const buttons = document.querySelectorAll(".game-options button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
