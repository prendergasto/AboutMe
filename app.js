import compareNumbers from './compareNumbers.js';

const userInput = document.getElementById('input');
const guessButton = document.getElementById('guess-button');
const triesRemaining = document.getElementById('tries-remaining');
const guessContainer = document.getElementById('guess-container');
const guessResult = document.getElementById('guess-result');
const answerDisplay = document.getElementById('answer-display');

let magicNumber = 13;
// console.log(Math.round(Math.random() * 20));

let tries = 4;


guessButton.addEventListener('click', () => {
    tries --;
    triesRemaining.textContent = tries;
    if (compareNumbers(Number(userInput.value), magicNumber) === -1) {
        guessContainer.classList.remove('hidden');
        guessResult.textContent = 'too low!';
    }
    if (compareNumbers(Number(userInput.value), magicNumber) === 1) {
        guessContainer.classList.remove('hidden');
        guessResult.textContent = 'too high!';
    }
    // if (compareNumbers(Number(userInput.value), magicNumber) === 0.1) {
    //     guessContainer.classList.remove('hidden');
    //     guessResult.textContent = 'You\'re getting warmer!';
    // }
    if (compareNumbers(Number(userInput.value), magicNumber) === 0) {
        guessContainer.classList.remove('hidden');
        guessResult.textContent = 'correct!';
        answerDisplay.classList.remove('hidden');
        guessButton.disabled = true;
    }
    if (tries == 0 && compareNumbers(Number(userInput.value), magicNumber) !== 0) {
        guessButton.disabled = true;
        answerDisplay.classList.remove('hidden');
        answerDisplay.textContent = 'You lose!';

    }


});
