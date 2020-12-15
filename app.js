
const gameWindow = document.createElement("div");
gameWindow.classList.add("container");
const banner = document.createElement("h1");
gameWindow.append(banner);
const selection = document.createElement("div");
const rockButton = document.createElement("button");
rockButton.innerText = "rock";
rockButton.classList.add("button");
const paperButton = document.createElement("button");
paperButton.innerText = "paper";
paperButton.classList.add("button");
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "scissors";
scissorsButton.classList.add("button");
selection.append(rockButton);
selection.append(paperButton);
selection.append(scissorsButton);
banner.innerText = "Rock - Paper - Scissors";
gameWindow.append(selection);
document.querySelector("body").append(gameWindow);
selection.addEventListener("click", e => {
  const playerSelection = e.target.innerText;
  alert(playRound(playerSelection, computerPlay()));  
});

function computerPlay(){
  let num = Math.floor(Math.random()*3);
  let result = "";
  if(num == 0){
    result = "rock";    
  }else if (num == 1){
    result = "paper";
  }else{
    result = "scissors";
  }
  return result;
}

function playRound(playerSelection, computerSelection){
  let result, winner, loser, descriptor;
   
  if(playerSelection.toLowerCase() == computerSelection){
    result = "tie";
    winner = "Nobody";
    descriptor = "likes";
    loser = "a stalemate!";
  }
  if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    result = "win";
    winner = playerSelection;
    descriptor = "smashes";
    loser = computerSelection;
  }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    result = "lose";
    winner = computerSelection;
    descriptor = "encases";
    loser = playerSelection;
  }
  if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    result = "win";
    winner = playerSelection;
    descriptor = "encases";
    loser = computerSelection;        
  }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    result = "lose";
    winner = computerSelection;
    descriptor = "cut";
    loser = playerSelection; 
  }
  if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    result = "win";
    winner = playerSelection;
    descriptor = "cut";
    loser = computerSelection;    
  }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    result = "lose";
    winner = computerSelection;
    descriptor = "smashes";
    loser = playerSelection;
  }
  return `You ${result}! ${winner} ${descriptor} ${loser}`;  
}

function game(){
  //todo
  let playerScore = 0;
  let computerScore = 0;
  let gameOver = (playerScore >= 5 || computerScore >= 5);
  while(!gameOver){
    playerSelection = prompt("Select your weapon.");
    computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  }
}




