'use strict';

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling the dice
btnRoll.addEventListener("click", function () {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice-${dice}.png`

    // check for a rolled 1 
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        // switch to next player

        // if current player rolls 1, reset their score before switching players
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;

        // if active player is player zero, switch to player one. otherwise, if active player is player one, switch to player zero.
        activePlayer = activePlayer === 0 ? 1 : 0;

        // change background to active player
        // toggle - add css class if it is not there, removes class if it is
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");


    }
});

// hold/save score
btnHold.addEventListener("click", function () {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // switch player (refer to code above)
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");

    // check if player's score is >= 100
    // if so, finish the game
    // if not, switch to the next player
});