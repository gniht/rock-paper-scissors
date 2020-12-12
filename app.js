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