"use strict";
const diceImg = document.querySelector(".dice");
const resetBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const players = document.querySelectorAll(".player");
const scores = document.querySelectorAll(".score");
const currentScores = document.querySelectorAll(".current-score");
const FINISH_SCORE = 6;

let currentScore = 0;
let _scores = [0, 0];
let currentPlayer = 0;
let playing = false;
let winnerExist = false;

rollBtn.onclick = onRollDice;
holdBtn.onclick = onHold;
resetBtn.onclick = onReset;

function onRollDice() {
  let dice = Math.ceil(Math.random() * 6);
  if (!playing) {
    diceImg.classList.remove("hidden");
    playing = true;
  }
  // random image
  let imgURL = `./images/dice-${dice}.png`;
  diceImg.src = imgURL;

  // add dice value to currentScore
  if (dice === 1) {
    nextPlayer();
  } else {
    currentScore += dice;
    currentScores[currentPlayer].innerHTML = currentScore;
  }
}

function onHold() {
  // add currentScore to score and displaying
  _scores[currentPlayer] += currentScore;
  scores[currentPlayer].innerHTML = _scores[currentPlayer];

  checkWinner();
  nextPlayer();
}

function onReset() {
  currentScores[currentPlayer].innerHTML = 0;
  scores.forEach((score) => (score.innerHTML = 0));
  diceImg.classList.add("hidden");
  rollBtn.disabled = false;
  holdBtn.disabled = false;

  currentScore = 0;
  _scores = [0, 0];
  if (winnerExist) players[currentPlayer].classList.remove("player--winner");

  if (currentPlayer !== 0) {
    currentPlayer = 0;
    players[0].classList.add("player--active");
    players[1].classList.remove("player--active");
  }
}

function checkWinner() {
  if (_scores[currentPlayer] >= FINISH_SCORE) {
    players[currentPlayer].classList.add("player--winner");
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    winnerExist = true;
    playing = false;
  }
}

function nextPlayer() {
  currentScore = 0;
  currentScores[currentPlayer].innerHTML = currentScore;
  players[currentPlayer].classList.remove("player--active");
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  players[currentPlayer].classList.add("player--active");
}

// {} -> block scope
// () => {} -> function scope
// {} -> {...all codes...}

// const my_input = document.getElementById("player_1");
// const btn = document.getElementById("btn");
// my_input.addEventListener("keyup", (event) => {
//   if (event.target.value === "") btn.classList.add("hidden");
//   else btn.classList.remove("hidden");
//   console.log("value = ");
// });
