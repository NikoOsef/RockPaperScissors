
let playerChoice;
let computerNum;
let computerChoice;
let x = 0; //player Score;
let y = 0; //computer Score;
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
const images = document.querySelectorAll("img");
const comp_Rock = document.querySelector("#comprock");          //Images for computer choice
const comp_Paper = document.querySelector("#comppaper");
const comp_Scissors = document.querySelector("#compscissors")
const player_Rock = document.querySelector("#rock");
const player_Paper = document.querySelector("#paper");
const player_Scissors = document.querySelector("#scissors");


/*This might be complicated but this is solution from my knowledge for computer choice recognition to players, when 1 option is chosen by computer
  it gets border and disables other borders, so this way players will see what was choice of computer. */
    
 function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3 + 1);
    if(randomNum == 1){
        computerNum = 0; //Rock
        comp_Rock.style.cssText = "border:3px dotted blue;";
        comp_Paper.style.cssText = "border: 3px dotted #949398FF";
        comp_Scissors.style.cssText = "border: 3px dotted #949398FF";
        console.log(computerNum);
    }else if(randomNum == 2){
        computerNum = 1; //Paper
        comp_Paper.style.cssText = "border: 3px dotted blue";
        comp_Rock.style.cssText = "border: 3px dotted #949398FF";
        comp_Scissors.style.cssText = "border: 3px dotted #949398FF";
        console.log(computerNum);
    }else if(randomNum == 3){
        computerNum = 2; //Scissors
        comp_Scissors.style.cssText = "border: 3px dotted blue";
        comp_Paper.style.cssText  = "border: 3px dotted #949398FF";
        comp_Rock.style.cssText = "border: 3px dotted #949398FF";
        console.log(computerNum);
    }
    return computerNum;
}


//Just like computer selection, I've came up with same solution for player selection as well 

images.forEach(_img => {
  _img.addEventListener("click", function() {
    if (_img.id === "rock") {
      playerChoice = 0;
      player_Rock.style.cssText = "border: 3px dotted red";
      player_Paper.style.cssText = "border : 3px dotted #949398FF";
      player_Scissors.style.cssText = "border : 3px dotted #949398FF";
    } else if (_img.id === "paper") {
      playerChoice = 1;
      player_Paper.style.cssText = "border : 3px dotted red";
      player_Rock.style.cssText = "border: 3px dotted #949398FF";
      player_Scissors.style.cssText = "border : 3px dotted #949398FF";
      } else if(_img.id === "scissors"){
        playerChoice = 2;
        player_Scissors.style.cssText = "border : 3px dotted red";
        player_Rock.style.cssText = "border: 3px dotted #949398FF";
        player_Paper.style.cssText = "border: 3px dotted #949398FF";
      }
        computerChoice = getComputerChoice();
        
        playRound(playerChoice, computerChoice);
        playerScore.textContent = x;
        computerScore.textContent = y;
        
      
  });
});



//Play one round of rock paper scissors and keep track of score.

function playRound(player, computer){
    
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

     reset();

    }


//reset function to set scores to 0.

function reset(){
   if(x == 3 || y == 3){
    alert("Hello World");
   y = 0;
   x = 0;
        comp_Paper.style.cssText = "border: 3px dotted #949398FF";
        comp_Rock.style.cssText = "border: 3px dotted #949398FF";
        comp_Scissors.style.cssText = "border: 3px dotted #949398FF";
        player_Paper.style.cssText = "border : 3px dotted #949398FF";
        player_Scissors.style.cssText = "border : 3px dotted #949398FF";
        player_Rock.style.cssText = "border: 3px dotted #949398FF";
}
} 
 
