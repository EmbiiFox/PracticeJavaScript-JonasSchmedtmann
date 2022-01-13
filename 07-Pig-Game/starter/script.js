'use strict';
var getEle = function (selector) {
    return document.querySelector(selector);
}
//Selecting elements
const score0Ele = getEle('#score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = getEle('#current--0');
const current1Ele = getEle('#current--1');
const diceEle = getEle('.dice')
const btnNew = getEle('.btn--new');
const btnRoll = getEle('.btn--roll');
const btnHold = getEle('.btn--hold');

//Starting condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');
const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

//rolling dice
btnRoll.addEventListener('click', function () {
    // 1. Generatiing a random dice rolling
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Dislay dice
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;
    // console.log(diceEle.src);
    // 3. Check 
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        getEle(`#current--${activePlayer}`).textContent = currentScore;
        // current0Ele.textContent = currentScore;
    } else {
        // Switch to the next player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }

})