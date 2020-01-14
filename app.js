import isYes from './is-yes.js'

const quizButton = document.getElementById('quizButton');

quizButton.addEventListener('click', () => {
    console.log = ('button works!');

    const name = prompt('What is your name?');
    const confirmation = confirm (`${name}, are you sure you want to take the quiz?`);
    if(confirmation === false) return;
    const answer1 = prompt('Am I from Portland?');
    const answer2 = prompt('Did I go to school in Boulder?');
    const answer3 = prompt('Do I like cats?');
    const answer4 = prompt('Do I like the way ice cream makes me feel?');
    let count = 0;
    if(isYes(answer1)) count ++;
    if(isYes(answer2)) count ++;
    if(!isYes(answer3)) count ++;
    if(!isYes(answer4)) count ++;
    total.textContent=(`${name}, you scored a ${count} on my quiz`)
});

