// username input
let username = prompt("what's your name?");
if (username.length > 10) {
  alert("Please use a nickname under 10 characters");
}

/* STEP 1: 
Create an array with 5 objects (rock, paper, scissors, lizard, spock)
and each option carries two proporties:
(1)name of the option
(2)value of the option */

const options = [
  {name: "rock", value: 0},
  {name: "paper", value: 1},
  {name: "scissors", value: 2},
  {name: "lizard", value: 3},
  {name: "spock", value: 4}
];
 // array of options
const numOptions = options.length; // number of options



let gamesPlayed = 0;
let yourScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  gamesPlayed++;
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Loser"; 
  } //R1
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //R2
  else if (playerSelection === "rock" && computerSelection === "lizard") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //R3
  else if (playerSelection === "rock" && computerSelection === "spock") {
    computerScore++; 
    return "You lose! Loser"; 
  } //R4
  else if (playerSelection === "paper" && computerSelection === "rock") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //P1
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++; 
    return "You lose! Loser"; 
  } //P2
  else if (playerSelection === "paper" && computerSelection === "lizard") {
    computerScore++; 
    return "You lose! Loser"; 
  } //P3
  else if (playerSelection === "paper" && computerSelection === "spock") {
    computerScore++; 
    return "You lose! Loser"; 
  } //P4
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++; 
    return "You lose! Loser"; 
  } //S1
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //S2
  else if (playerSelection === "scissors" && computerSelection === "lizard") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //S3
  else if (playerSelection === "scissors" && computerSelection === "spock") {
    computerScore++; 
    return "You lose! Loser"; 
  } //S4
  else if (playerSelection === "lizard" && computerSelection === "rock") {
    computerScore++; 
    return "You lose! Loser"; 
  } //L1
  else if (playerSelection === "lizard" && computerSelection === "paper") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //L2
  else if (playerSelection === "lizard" && computerSelection === "scissors") {
    computerScore++; 
    return "You lose! Loser"; 
  } //L3
  else if (playerSelection === "lizard" && computerSelection === "spock") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //L4
  else if (playerSelection === "spock" && computerSelection === "rock") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //S1
  else if (playerSelection === "spock" && computerSelection === "paper") {
    computerScore++; 
    return "You lose! Loser"; 
  } //S2
  else if (playerSelection === "spock" && computerSelection === "scissors") {
    yourScore++; 
    return "You win! Congratulations"; 
  } //S3
  else if (playerSelection === "spock" && computerSelection === "lizard") {
    computerScore++; 
    return "You lose! Loser";  
  } //S4
  else {
    return "Tie! Try again!";
  }
}

/* STEP 2: 
Create a function for the computer to randomly select a value (1 or 2 or 3), 
so that it's choice points back to array(options),
and then we can compare later on with what the player chooses.
*/ 

function computerPlay(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  console.log("Computer: " + array[randomNumber].name); 
  return array[randomNumber].name; 
}
computerPlay(options);





  
/*STEP 3:
Create a funtion to compare playerSelection and computerSelection 
by a formula their to extract a value that falls between 0 and 2 (with no negative numebrs).
Then we can assign each case with a different return to announce the result of the game,
which can link to a score system in a later stage.
*/






function updateResultText(result) {
  const resultText = document.getElementById("result-text");
  resultText.textContent = result;
}

/* STEP 4: 
We use the find method with a callback function,
in order to link back to the id in index.html,
so the three buttons will be connected to the array(options) by options.name.
Call function playRound to compare playerSelection and computerSelection.
 */ 
// come back and experiment - figure out why it's double counting
function handleClick(event) {
  const playerOption = options.find(option => option.name === event.target.id);
  const playerSelection = playerOption.name;
  console.log("You: " + playerSelection);
  const computerSelection = computerPlay(options);
  const result = playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  updateResultText(result);
  console.log(`games played ${gamesPlayed/2}`);
  console.log(`your score: ${yourScore/2}`);
  console.log(`computer score: ${computerScore/2}`);
  document.getElementById('gamesPlayed').innerHTML = `you have played: ${gamesPlayed/2} games`;
  document.getElementById('yourScore').innerHTML = `${username}'s score is: ${yourScore/2}`;
  document.getElementById('computerScore').innerHTML = `The computer's score is: ${computerScore/2}`;
}
const buttons = document.querySelectorAll(".game-options button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

/* STEP 5: 
Create a Score system to keep track of how many times the computer wins and how many times the player wins.
*/



/* STEP 6: done
Allow the player to input their username 
which is fewer than 10 letters,
and use a promot. 
*/

/* (Bonus A) STEP 7:
Extend to more options: rock paper scissors lizard spock
*/





/* (Bonus B) STEP 8:
-How would you go about making the computer win every time?
-How would you go about making it so that the computer wins more often (1/2 the time, 1/4 of the time 90% of the time)?
-Plan how you'd go about implementing this (use pseudo-code).
-If you have time, see if you can start writing this.
*/

