let playerChoice;
let computerNum;
let computerChoice;
let playerScore;
let compScore;


    
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





const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.textContent == "Rock"){
        playerChoice = 0;
        }else if(button.textContent == "Paper"){
        playerChoice = 1;
    }else if(button.textContent == "Scissors"){
        playerChoice = 2;
    }
        computerChoice = getComputerChoice();
        playerRound(playerChoice, computerChoice);
  });
  

});

function playerRound(player, computer){
    if(player == 0 && computer == 1){
       alert("Hello");

    }else if(player == 0 && computer == 2){
        
    }else if(player == 0 && computer == 2){
        alert("Scissors");
    }
}

