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
    let picture = document.createElement('img');
    picture.setAttribute('class', 'result-img');
    picture.setAttribute('style', 'margin-left: 35%; height: 40%; width: 40%;');
    let finale;
    if (playerSelection == computerSelection){
        picture.setAttribute('src', 'images/lose.gif');
        finale = `It's a tie! Both selected ${playerSelection}`;
    }
    else if (playerSelection == "Rock")
    {
        if (computerSelection == "Scissors"){
            picture.setAttribute('src', 'images/win.gif');
            finale = `You won! Rock beats Scissors`;
        }
        else {picture.setAttribute('src', 'images/lose.gif');
        finale = `You lost! Paper beats Rock`;}
    }
    else if (playerSelection == "Paper")
    {
        if (computerSelection == "Scissors"){
            picture.setAttribute('src', 'images/lose.gif');
            finale = `You lost! Scissors beat Paper`;
        }
        else {picture.setAttribute('src', 'images/win.gif');
        finale = `You Won! Paper beats Rock`;}
    }
    else
    {
        if (computerSelection == "Rock"){
            picture.setAttribute('src', 'images/lose.gif');
            finale = `You lost! Rock beats Scissors`;
        }
        else {picture.setAttribute('src', 'images/win.gif');
        finale = `You Won! Scissors beat Paper`;}
    }
    let respace = document.querySelector("#resgif");
        respace.appendChild(picture);
        return finale;
    }


function game(playerChoice){
        let computerChoice;
        computerChoice = getComputerChoice();
        let result = document.createElement('div');
        result.textContent = (playRound(playerChoice, computerChoice));
        result.setAttribute('style', 'text-align: center;');
        result.setAttribute('id', 'restext');
        let respace = document.querySelector("#respace");
        respace.appendChild(result);
}

function clearGameMessages(){
    let result = document.querySelector("#restext");
    let respace = document.querySelector("#respace");
    let gifspace = document.querySelector("#resgif");
    let img = document.querySelector(".result-img");
    respace.removeChild(result);
    gifspace.removeChild(img);
}

function rightImage(element){
    let picture = document.createElement('img');
    if (element.textContent == "Rock"){
        picture.setAttribute('src', 'images/rock-sus.gif');
    }
    else if (element.textContent == "Paper"){
        picture.setAttribute('src', 'images/paper.png');
    }
    else{
        picture.setAttribute('src', 'images/scissors.gif');
    }
    picture.setAttribute('class', 'nested-img');
    picture.setAttribute('style', 'height: 80%; width: 80%;');
    return picture;
}

function accessImage(){
    let img = document.querySelector(".nested-img");
    return img;
}
const choices = document.querySelectorAll(".choice");
const space = document.querySelector("#image-space");
choices.forEach(element => {
    element.addEventListener('click', () => {game(element.textContent); /**/});
    element.addEventListener('mouseenter', () => space.appendChild(rightImage(element)));
    element.addEventListener('mouseout', () => {space.removeChild(accessImage()); clearGameMessages();});
});

