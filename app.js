
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
  const resultMessage = `You ${result}! ${winner} ${descriptor} ${loser}`
  if(playerSelection.toLowerCase() == computerSelection){
    result = "tie";
    winner = "Nobody";
    descriptor = "likes";
    loser = "a stalemate!";
  }
  if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    winner = playerSelection;
    descriptor = "smashes";
    loser = computerSelection;
  }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    winner = computerSelection;
    descriptor = "encases";
    loser = playerSelection;
  }
  if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    winner = playerSelection;
    descriptor = "encases";
    loser = computerSelection;        
  }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    winner = computerSelection;
    descriptor = "cut";
    loser = playerSelection; 
  }
  if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    winner = playerSelection;
    descriptor = "cut";
    loser = computerSelection;    
  }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    winner = computerSelection;
    descriptor = "smashes";
    loser = playerSelection;
  }
  return resultMessage;  
}
