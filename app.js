import compareNumbers from './compareNumbers.js'

const userInput = document.getElementById('enter-guess');
const guessButton = document.getElementById('submit-guess');
const triesRemaining = document.getElementById('tries-display');
const tempContainer = document.getElementById('temp-container');
const tempDisplay = document.getElementById('temp-display');
const resultContainer = document.getElementById('result-container');
const resultDisplay = document.getElementById('result-display');

let magicNumber = 13;

let tries = 4;

guessButton.addEventListener('click', () => {
    tries --;
    triesRemaining.textContent = tries;
    if (compareNumbers(Number(userInput.value), magicNumber) === 0) {
        tempDisplay.textContent = 'you got it!';
        tempContainer.classList.remove('hidden');
        resultContainer.classList.remove('hidden');
        guessButton.disabled = true;
    }
    if (compareNumbers(Number(userInput.value), magicNumber) === -1) {
        tempDisplay.textContent = 'too low!';
        tempContainer.classList.remove('hidden');
    }
    if (compareNumbers(Number)(userInput.value), magicNumber) === 1) {
        tempDisplay.textContent = "too high!";
        tempContainer.classList.remove('hidden');
    }
    if (tries === 0  && compareNumbers(Number)(userInput.value), magicNumber !== 0) {
        guessButton.disabled = true;
        resultContainer.classList.remove('hidden');
        resultDisplay.textContent = 'lost';
    }

});