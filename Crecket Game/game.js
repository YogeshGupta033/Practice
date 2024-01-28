
function generateComputerChoice(){
  let randomNumber=Math.random() *3;
  let computerChoice;      
      if(randomNumber > 0 && randomNumber <=1 ){
        computerChoice ='bat';
      }
      else if(randomNumber>1 && randomNumber<=2){
        computerChoice = 'ball';
      }
      else{
        computerChoice='stump';
      }
      return computerChoice;
}


function getResult(userMove, ComputerMove){
    if (userMove='bat'){
      
      if (ComputerMove === 'bat'){
        return `It's a Tie`;
      }
      else if (ComputerMove === 'ball'){
        return`User Won`;
      }
      else if (ComputerMove === 'stump'){
        return`Computer Won`;
      }
    }
    else if (userMove='ball'){

      if (ComputerMove === 'bat'){
        return  `Computer Won`;
      }
      else if (ComputerMove === 'ball'){
        return `Its a tie`;
      }
      else if (ComputerMove === 'stump'){
        return `User Won`;
      }
      else{
        if (ComputerMove === 'bat'){
          return `Computer won`;
        }
        else if (ComputerMove === 'ball'){
          return`User Won`;
        }
        else if (ComputerMove === 'stump'){
          return`Its a tie`;
        }
      }
      
    }
}

function showResult(userMove, ComputerMove, result){
  alert(`Your Choice is ${userMove} Computer Choice is ${ComputerMove} According to this the Result is  ${result}`);
}