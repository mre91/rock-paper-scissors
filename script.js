let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let wins = 0;
let losses = 0;

const header = document.createElement('h1');
header.setAttribute('id', 'header');
header.textContent = 'Rock, Paper, Scissors';
container.appendChild(header);

const mainBlock = document.createElement('div');
mainBlock.setAttribute('id', 'mainBlock');
container.appendChild(mainBlock);

const score = document.createElement('div');
score.setAttribute('id', 'score');
score.textContent = 'Score: ' + wins + ' - ' + losses;
mainBlock.appendChild(score);

const message = document.createElement('p');
message.setAttribute('id', 'message');
message.textContent = 'Welcome! ' +
    'To begin, select Rock, Paper, or Scissors from the buttons below. ' +
    'First to 5 wins the game.';
    mainBlock.appendChild(message);

const buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');
mainBlock.appendChild(buttons);

let rockButton = document.createElement("BUTTON");
rockButton.setAttribute('id', 'rock');
rockButton.innerHTML = 'Rock';
buttons.appendChild(rockButton);

let paperButton = document.createElement("BUTTON");
paperButton.setAttribute('id', 'paper');
paperButton.innerHTML = 'Paper';
buttons.appendChild(paperButton);

let scissorsButton = document.createElement("BUTTON");
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.innerHTML = 'Scissors';
buttons.appendChild(scissorsButton);

let resetButton = document.createElement("BUTTON");
resetButton.setAttribute('id', 'resetButton');
resetButton.innerHTML = 'Reset';
buttons.appendChild(resetButton);

resetButton.addEventListener('click', () => {
    resetGame();
})

rockButton.addEventListener('click', () => {
    let result = playRound('rock');
    message.textContent = result;
    updateScore(result);
});

paperButton.addEventListener('click', () => {
    let result = playRound('paper');
    message.textContent = result;
    updateScore(result);
});

scissorsButton.addEventListener('click', () => {
    let result = playRound('scissors');
    message.textContent = result;
    updateScore(result);
});

function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return 'rock';
    } else if (random == 2) {
        return 'paper';
    } else if (random == 3) {
        return 'scissors';
    }
}

function playRound(playerSelection) {
    if (wins >= 5) {
        return 'You Win! Congratulations!';
    } else if (losses >= 5) {
        return 'You Lose! Good Day Sir!';
    }

    computerSelection = computerPlay();

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'Draw. You both chose Rock.';
        } else if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock.';
        } else {
            return 'You Win! Rock beats Scissors.';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock.';
        } else if (computerSelection == 'paper') {
            return 'Draw. You both chose Paper.';
        } else {
            return 'You Lose! Scissors beats Paper.';
        }
    } else {
        if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors.';
        } else if (computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper.';
        } else {
            return 'Draw. You both chose scissors.';
        }
    }
}

function resetGame() {
    losses = 0;
    wins = 0;
    score.textContent = 'Score: ' + wins + ' - ' + losses;
    message.textContent = 'Welcome! ' +
    'To begin, select Rock, Paper, or Scissors from the buttons below. ' +
    'First to 5 wins the game.';
}

function updateScore(result) {
    if (wins >= 5 || losses >= 5) {
        return;
    } else if (result.slice(0, 7) == 'You Win') {
        ++wins;
    } else if (result.slice(0, 8) == 'You Lose') {
        ++losses;
    }

    if (wins === 5) {
        message.textContent = 'You Win! Congratulations!';
    } else if (losses === 5) {
        message.textContent = 'You Lose! Good Day Sir!';
    }

    score.textContent = 'Score: ' + wins + ' - ' + losses;
}