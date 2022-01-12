'use strict';
var getEle = function (selector) {
    return document.querySelector(selector);
}
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
    getEle('.message').textContent = message;
}
// getEle('.number').textContent = secretNumber;
getEle('.check').addEventListener('click', function () {
    const guess = +getEle('.guess').value;
    console.log(guess, typeof guess);

    if (!guess) {
        // getEle('.message').textContent = "No number ❌"
        displayMessage('No number ❌');
    } else if (guess === secretNumber) {
        // getEle('.message').textContent = "You win"
        displayMessage('You win')
        getEle('body').style.backgroundColor = '#60b347'
        getEle('.number').style.width = '30rem';
        getEle('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            getEle('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // getEle('.message').textContent = guess > secretNumber ? "Too high" : "To low";
            displayMessage(guess > secretNumber ? "Too high" : "To low")
            score--;
            getEle('.score').textContent = score;
        } else {
            // getEle('.message').textContent = 'You lost the game'
            displayMessage('You lost the game');
            score--;
            getEle('.score').textContent = score;
        }
    }
    //  else if (guess > secretNumber) {
    //     if (score > 1) {
    //         getEle('.message').textContent = "Too high"
    //         score--;
    //         getEle('.score').textContent = score;
    //     } else {
    //         getEle('.message').textContent = 'You lost the game'
    //         score--;
    //         getEle('.score').textContent = score;
    //     }
    // } else {
    //     if (score > 1) {
    //         getEle('.message').textContent = "To low"
    //         score--;
    //         getEle('.score').textContent = score;
    //     } else {
    //         getEle('.message').textContent = 'You lost the game'
    //         score--;
    //         getEle('.score').textContent = score;
    //     }
    // }
})


//Again function
getEle('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    getEle('.message').textContent = 'Start guessing...'
    getEle('.score').textContent = score;
    getEle('.number').textContent = '?'
    getEle('.guess').value = '';
    getEle('.body').style.backgroundColor = '#222';
    getEle('.number').style.width = '15rem'


})