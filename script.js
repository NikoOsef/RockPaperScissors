let playerChoice;
let computerNum;
let computerChoice;
let x = 0; //player Score;
let y = 0; //computer Score;
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
const divs = document.querySelectorAll("div");


    
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


divs.forEach(div => {
  div.addEventListener("click", function() {
    if (div.id === "rock") {
      playerChoice = 0;
    } else if (div.id === "paper") {
      playerChoice = 1;
      } else if(div.id === "scissors"){
        playerChoice = 2;
      }

        computerChoice = getComputerChoice();
        playerRound(playerChoice, computerChoice);
  });
});


function playerRound(player, computer){
     if(x == 3 || y == 3){
        reset();
    }else if(player == 0 && computer == 2){
        y++;
        computerScore.textContent = y;
    }else if(player == 0 && computer == 1){
        x++;
     }else if(player ==1 && computer == 0){
        x++;
     }else if(player == 1 && computer == 2){
        y++;
     }else if(player ==2 && computer == 0){
        y++;
     }else if(player == 2 && computer == 1){
        x++;
     }
     playerScore.textContent = x;
     computerScore.textContent = y;
     
    
function reset(){
   alert("Hello World");
   y = 0;
   x = 0;
   playerScore.textContent = x;
   computerScore.textContent = y;
}
}
