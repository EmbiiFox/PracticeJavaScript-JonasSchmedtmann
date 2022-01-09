'use strict';
var getEle = function (selector) {
    return document.querySelector(selector);
}
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
getEle('.number').textContent = secretNumber;
getEle('.check').addEventListener('click', function () {
    const guess = +getEle('.guess').value;
    console.log(guess, typeof guess);
    if (!guess) {
        getEle('.message').textContent = "No number ❌"
    } else if (guess === secretNumber) {
        getEle('.message').textContent = "You win"
    } else if (guess > secretNumber) {
        if (score > 1) {
            getEle('.message').textContent = "To high"
            score--;
            getEle('.score').textContent = score;
        } else {
            getEle('.message').textContent = 'You lost the game'
            score--;
            getEle('.score').textContent = score;
        }
    } else {
        if (score > 1) {
            getEle('.message').textContent = "To low"
            score--;
            getEle('.score').textContent = score;
        } else {
            getEle('.message').textContent = 'You lost the game'
            score--;
            getEle('.score').textContent = score;
        }
    }

})