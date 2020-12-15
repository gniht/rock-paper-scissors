
let score = {playerScore: 0, computerScore: 0};

const gameWindow = document.createElement("div");
gameWindow.classList.add("container");
const banner = document.createElement("h1");
gameWindow.append(banner);
const selection = document.createElement("div");
selection.classList.add("centerh");
const startdiv = document.createElement("div");

const startBtn = document.createElement("button");
startBtn.classList.add("button", "centered");
const startCaption = document.createElement("h3");
startCaption.textContent = `Zero margin for error. One challenger. One enemy. Two combatants. Three weapons. Five victories.`;
startCaption.classList.add("centerh");
startBtn.textContent = "Make Fibonacci Proud";
startdiv.append(startCaption);
startdiv.append(startBtn);
gameWindow.append(startdiv);
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
const scoreBoard = document.createElement("h2");
scoreBoard.innerText = `Human: ${score.playerScore} || Computer: ${score.computerScore}`;
scoreBoard.classList.add("centerh");

document.querySelector("body").append(gameWindow);

function reset(){
  gameWindow.removeChild(scoreBoard);  
  gameWindow.removeChild(selection);
  gameWindow.append(startdiv);
  score.playerScore = 0;
  score.computerScore = 0;
  scoreBoard.innerText = `Human: ${score.playerScore} || Computer: ${score.computerScore}`; 
}
startBtn.addEventListener("click", e =>{
  gameWindow.removeChild(startdiv);
  if(e.target.textContent == "Make Fibonacci Proud"){
    playerScore = 0;
    computerScore = 0;
  }
  gameWindow.append(scoreBoard);  
  gameWindow.append(selection);
  
});
selection.addEventListener("click", e => {
  const playerSelection = e.target.innerText;    
  playRound(playerSelection, computerPlay(), score);
  if(score.playerScore >= 5){
    scoreBoard.innerText = "You have emerged victorious!";
    setTimeout(reset, 3000);
  }else if (score.computerScore >= 5){
    scoreBoard.innerText = "You have been defeated!";
    setTimeout(reset, 3000);
  }else{
    scoreBoard.innerText = `Human: ${score.playerScore} || Computer: ${score.computerScore}`;
  }
  
  
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

function playRound(playerSelection, computerSelection, score){
  let result, winner, loser, descriptor;
   
  if(playerSelection.toLowerCase() == computerSelection){
    result = "tie";
    winner = "Nobody";
    descriptor = "likes";
    loser = "a stalemate!";
  }
  if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    result = "win";
    score.playerScore += 1;
    winner = playerSelection;
    descriptor = "smashes";
    loser = computerSelection;
  }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    result = "lose";
    score.computerScore += 1;
    winner = computerSelection;
    descriptor = "encases";
    loser = playerSelection;
  }
  if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    result = "win";
    score.playerScore += 1;
    winner = playerSelection;
    descriptor = "encases";
    loser = computerSelection;        
  }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    result = "lose";
    score.computerScore += 1;
    winner = computerSelection;
    descriptor = "cut";
    loser = playerSelection; 
  }
  if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    result = "win";
    score.playerScore += 1;
    winner = playerSelection;
    descriptor = "cut";
    loser = computerSelection;    
  }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    result = "lose";
    score.computerScore += 1;
    winner = computerSelection;
    descriptor = "smashes";
    loser = playerSelection;
  }
  return `You ${result}! ${winner} ${descriptor} ${loser}`;  
}


// function game(){//   
//   let playerScore = 0;
//   let computerScore = 0;
//   let gameOver = (playerScore >= 5 || computerScore >= 5);
//   while(!gameOver){
//     playerSelection = prompt("Select your weapon.");
//     computerSelection = computerPlay();
//     alert(playRound(playerSelection, computerSelection));
//   }
// }




