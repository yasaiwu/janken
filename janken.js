
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  const choice = randomBetween(0, 2);
  return moves[choice];
}

function randomBetween(first, last) {
  const choices = last - first + 1;
  return Math.trunc(Math.random() * choices + first);
}


function round(playerSelection, computerSelection) {
  const beats = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  };

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  }

  if (beats[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }

  return `You lose! ${computerSelection} beats ${playerSelection}`;
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));
