
let playerChoice;
let computerNum;
let computerChoice;
let x = 0; //player Score;
let y = 0; //computer Score;
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
const images = document.querySelectorAll("img");


    
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3 + 1);
    if(randomNum == 1){
        computerNum = 0; //Rock
    }else if(randomNum == 2){
        computerNum = 1; //Paper
    }else if(randomNum == 3){
        computerNum = 2; //Scissors
    }
    return computerNum;
}


 

images.forEach(_img => {
  _img.addEventListener("click", function() {
    if (_img.id === "rock") {
      playerChoice = 0;
    } else if (_img.id === "paper") {
      playerChoice = 1;
      } else if(_img.id === "scissors"){
        playerChoice = 2;
      }
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        playerScore.textContent = x;
        computerScore.textContent = y;
      
  });
});



//Play one round of rock paper scissors and keep track of score.

function playRound(player, computer){
    reset();


    if(player == 0 && computer == 2){
        y++;
    }else if(player === 0 && computer === 1){
        x++;
     }else if(player === 1 && computer === 0){
        x++;
     }else if(player === 1 && computer === 2){
        y++;
     }else if(player === 2 && computer === 0){
        y++;
     }else if(player === 2 && computer === 1){
        x++;
     }else{
       console.log("Draw");
     }

     

    }


//reset function to set scores to 0.

function reset(){
   if(x == 3 || y == 3){
    alert("Hello World");
   y = 0;
   x = 0;
}
} 
 
