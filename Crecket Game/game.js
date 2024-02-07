let scoreStr = localStorage.getItem('score');
let score;

resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : 
    {win: 0,
    lost: 0,
    tie: 0,
    };
  }

score.displayScore= function(){
  
    return `Numbers of Win Matches: ${score.win},
    numbers of lost Matches: ${score.lost},
    Number of Tied Matches : ${score.tie}`;
  
};

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
    score.tie++;
    return `It's a Tie`;
    }
    else if (ComputerMove === 'ball'){
    score.win++;
    return`User Won`;
    }
    else if (ComputerMove === 'stump'){
    score.lost++;
    return`Computer Won`;
    }
    }
    else if (userMove='ball'){
    
    if (ComputerMove === 'bat'){
    score.tie++;
    return `Computer Won`;
    }
    else if (ComputerMove === 'ball'){
    score.tie++;
    return `Its a tie`;
    }
    else if (ComputerMove === 'stump'){
    score.win++;
    return `User Won`;
    }
    else{
    if (ComputerMove === 'bat'){
    score.lost++;
    return `Computer won`;
    }
    else if (ComputerMove === 'ball'){
    score.win++;
    return`User Won`;
    }
    else if (ComputerMove === 'stump'){
    score.lost++;
    return`Its a tie`;
    }
  }
  }
  }
  
  function showResult(userMove, ComputerMove, result){
  localStorage.setItem('score', JSON.stringify(score));
  alert(`Your Choice is ${userMove} Computer Choice is ${ComputerMove} According to this the Result is ${result}
  ${score.displayScore()} `);
  }
  