'use strict';

const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const score = document.querySelector('span.score')
const highScore = document.querySelector('span.highscore')
const displaySecretNum = document.querySelector('.number')
let secretNumber = Math.ceil(Math.random() * 20)


// When (Win, GameOver, Reset)
function endGame(bgColor, messageText, width, endGame, dispSecretNum) {
    displaySecretNum.innerText = dispSecretNum;
    displaySecretNum.style.width = width;
    document.body.style.backgroundColor = bgColor;
    message.innerText = messageText;
    checkBtn.disabled = endGame;
}
function updateHighscore() {
    if (Number(score.innerText) > Number(highScore.innerText)) {
        highScore.innerText = score.innerText
    }
}

function checkNum() {
    const guessNum = parseInt(guess.value)

    if (guessNum >= 1 && guessNum <= 20) {
        // When player wins
        if (guessNum === secretNumber) {
            endGame('rgb(94, 0, 187)', '🎉 Correct!', '20rem', true, secretNumber)
            updateHighscore()
        }
        // When guess is wrong
        else {
            message.innerText = (guessNum > secretNumber) ? '📈 Too high' : '📉 Too low';
            score.innerText -= 10;
        }
        // When score = 0 (Game Over)
        if (score.innerText === '0') {
            endGame('rgb(147, 21, 86)', '💥 Game Over', '20rem', true, secretNumber)
        }
    }
    else { message.innerText = '⛔️ Type correct number' }
}

function reset() {
    endGame('rgb(33, 33, 70)', 'Start guessing...', '15rem', false, '?');
    secretNumber = Math.ceil(Math.random() * 20);
    score.innerText = '100';
    guess.value = '';
}

againBtn.addEventListener('click', reset)
checkBtn.addEventListener('click', checkNum)
