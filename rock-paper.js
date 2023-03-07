function getComputerChoice(){
    choice = Math.floor(Math.random() * 3 + 1);
    switch(choice){
        case 1: {return "Rock"}
        case 2: {return "Paper"}
        case 3: {return "Scissors"}
        default: {return "Error"}
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return `It's a tie! Both selected ${playerSelection}`;
    }
    else if (playerSelection == "Rock")
    {
        if (computerSelection == "Scissors"){
            return `You won! Rock beats Scissors`;
        }
        else {return `You lost! Paper beats Rock`;}
    }
    else if (playerSelection == "Paper")
    {
        if (computerSelection == "Scissors"){
            return `You lost! Scissors beat Paper`;
        }
        else {return `You Won! Paper beats Rock`;}
    }
    else
    {
        if (computerSelection == "Rock"){
            return `You lost! Rock beats Scissors`;
        }
        else {return `You Won! Scissors beat Paper`;}
    }
    }


function game(){
    let playerChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Select either rock, paper or scissors").toLowerCase();
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
     }
}

game();
