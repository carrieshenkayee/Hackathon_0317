const options = [
  { name: "rock", value: 1 },
  { name: "paper", value: 2 },
  { name: "scissors", value: 3 },
  { name: "lizard", value: 4 },
  { name: "spock", value: 5 },
];

// 
function computerPlay(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  console.log(`computer: ${array[randomNumber].value}`); 
  return array[randomNumber].value; 
}
computerPlay(options);
console.log(options.length);

function gameRockPaperScissors(options) {
  
}
  
// the equation uses the modulus function to convert 3 into 0 
// we add 3 to convert any negative results from the equation
// 
function playRound(array, playerSelection, computerSelection) {
  let n = array.length;
  let result = (playerSelection % 3 - computerSelection % 3 + n) % 3;  
  switch(result) {
    case 0: 
      return "tie! Try again!";
      break;
    case 1: 
      return "You lose! Loser";
      break;
    case 2: 
      return "You win! Congratulations";
      break;
  }
}
  
  

  /*
  TODO: Insert your code for your function that decides who the winner is here (from task 2). 

  This function should take in two moves (the player's move and the computer's move) and return a string with the game result.

  For example, if the player's move is rock and the computer's move is scissors, the function should use the return keyword to return "You win!"
  */

function updateResultText(result) {
  const resultText = document.getElementById("result-text");
  resultText.textContent = result;
}
function handleClick(event) {
  const playerOption = options.find(option => option.name === event.target.id);
  const playerSelection = playerOption.value;
  console.log(`player: ${playerSelection}`);
  const computerSelection = computerPlay(options);
  const result = playRound(options, playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  updateResultText(result);
}
const buttons = document.querySelectorAll(".game-options button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
