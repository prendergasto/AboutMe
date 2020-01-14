import isYes from './is-yes.js'

//retrieving the quiz button from the html document
const quizButton = document.getElementById('quizButton');


// adding an event listener to the "click" on the website
quizButton.addEventListener('click', () => {
    console.log = ('button works!');

// the first prompt after enganging the "take quiz" button on the website
    const name = prompt('What is your name?');
// confirming whether or not the user wants to take the quiz
    const confirmation = confirm (`${name}, are you sure you want to take the quiz?`);
// if the user clicks "cancel" it will register as "false" and return the user to the mainpage
    if (confirmation === false) return;
// prompt #2 / question 1
    const answer1 = prompt('Am I from Portland?');
// makes the "cancel" button functional
    if (answer1 === null) return;
    const answer2 = prompt('Did I go to school in Boulder?');
    if (answer2 === null) return;
    const answer3 = prompt('Do I like cats?');
    if (answer3 === null) return;
    const answer4 = prompt('Do I like the way ice cream makes me feel?');
    if (answer4 === null) return;
// "let" makes the count dynamic and able to change according to how well or how badly the user does on the quiz
    let count = 0;
// depending on the user's answer this will add a point, or not, if the answer is right or wrong
    if (isYes(answer1)) count ++;
    if (isYes(answer2)) count ++;
    if (!isYes(answer3)) count ++;
    if (!isYes(answer4)) count ++;
// this takes the total # correct and the name of the user and prints a statement on the results
    total.textContent = (`${name}, you scored a ${count} on my quiz`);
// if the person gets a 3 or a 4 they get a "good job!" message
    if (total === 3, 4) total.textContent = (`${name}, you scored a ${count} on my quiz. Good job!`);
    // tried doing an if greater than statement, but that wasn't working
});


