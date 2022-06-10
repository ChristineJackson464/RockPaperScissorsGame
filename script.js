// Cache the DOM: storing for future use
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// GLOBAL VARIABLES:
let userScore = 0;
let computerScore = 0;

// PULLING THE COMPUTER CHOICE:
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//  FUNCTION TO CONVERT VARIABLE(LETTER TO WORD):
function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

// WIN FUNCTION:
function win(userChoice, computerChoice) {
    const smUserWord = 'user'.fontsize(3).sub();
    const smCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord}  beats  ${convertToWord(computerChoice)}${smCompWord}. YOU WIN! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

// LOSE FUNCTION:
function lose(userChoice, computerChoice) {
    const smUserWord = 'user'.fontsize(3).sub();
    const smCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord}  loses  ${convertToWord(computerChoice)}${smCompWord}. YOU LOSE! 🥺`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

// DRAW FUNCTION:
function draw(userChoice, computerChoice) {
    const smUserWord = 'user'.fontsize(3).sub();
    const smCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord}  equals  ${convertToWord(computerChoice)}${smCompWord}. DRAAWWW! 😐`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}

// GAME FUNCTION:
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // SWITCH STATEMENT
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr': 
            lose(userChoice, computerChoice);
            break;   
        case 'rr':
        case 'pp':
        case 'ss': 
            draw(userChoice, computerChoice);
            break;   
    }
}

// MAIN FUNCTION:
function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

// ONLOAD FUNCTION
main();
