// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - WON
        gameOver(true, `${winningNum} is correct, you won!`);
    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game Over - LOST
            gameOver(false, `Game over, you lost! The correct number was ${winningNum}`)
        } else {
            // Game Continues
            setMessage(`Oups! Wrong guess! ${guessesLeft} guesses remaining.`, 'orange');
            guessInput.style.borderColor = 'orange';
            guessInput.value = '';
        }
    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';
    // Game over - LOSS
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    // Play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}