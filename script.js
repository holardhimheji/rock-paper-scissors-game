const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const computerChoices = document.getElementById('computer-choice');
const usersChoices = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const resetBtn = document.getElementById('reset')
const possibleChoices = document.querySelectorAll('.btn');
let userChoice;
let computerChoice;
let result;
let computerscore = 0;
let userscore = 0;

possibleChoices.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id
        usersChoices.innerHTML = userChoice;
        generateComputerChoice()
        getResult()
    })
})

resetBtn.addEventListener('click', () => {
    computerscore = 0;
    userscore = 0;
    computerChoices.innerHTML = '';
    usersChoices.innerHTML = '';   
    resultDisplay.innerText = ''; 
    
    computerScore.innerText = computerscore;
    userScore.innerText = userscore;
})
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        computerChoice = 'Rock'
    } else if(randomNumber === 1){
        computerChoice = 'Paper'
    } if(randomNumber === 2){
        computerChoice = 'Scissors'
    }
    computerChoices.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice){
        result = "Draw"
    }if(computerChoice == 'Rock' && userChoice == 'Paper'){
        result = "win"
        userscore++
    }if(computerChoice == 'Rock' && userChoice == 'Scissors'){
        result = "loss"
        computerscore++
    }if(computerChoice == 'Paper' && userChoice == 'Scissors'){
        result = "win"
        userscore++
    }if(computerChoice == 'Paper' && userChoice == 'Rock'){
        result = "loss"
        computerscore++
    }if(computerChoice == 'Scissors' && userChoice == 'Paper'){
        result = "loss"
        computerscore++
    }if(computerChoice == 'Scissors' && userChoice == 'Rock'){
        result = "win"
        userscore++
    }
    resultDisplay.textContent = result;
    userScore.innerText = userscore;
    computerScore.innerText = computerscore;

}