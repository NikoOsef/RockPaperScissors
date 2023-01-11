let playerChoice;
let computerNum;
let score;

    
function getComputerChoice(){
        let randomNum = Math.floor(Math.random() * 3 + 1);
        if(randomNum == 1){
            computerNum = 0;
        }else if(randomNum == 2){
            computerNum = 1;
        }else if(randomNum == 3){
            computerNum = 2;
        }
    return computerNum;
}

let computerChoice = getComputerChoice();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.textContent == "Rock"){
        playerChoice = 0;
        }else if(button.textContent == "Paper"){
        playerchoice = 1;
    }else if(button.textContent == "Scissors"){
        playerchoice = 2;
    }
  });
    

});

