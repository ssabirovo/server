"use strict";
// DOM Variables
const newBtn = document.querySelector(".btn--new");
const eraseBtn = document.querySelector(".btn--erase");
const numBtns = document.querySelectorAll(".btn--num");
const gameZone = document.querySelector(".game-zone");
let subCells = document.querySelectorAll(".sub-cell");
const RANDOM_LIMIT = 16;
// Logic Variables
let activeSubIdx;

newBtn.addEventListener("click", onNew);

// LOGIC functions
function onNew() {
  subCells.forEach((sub) => (sub.innerHTML = ""));
  renderRandomSubs();
}

function generateNum(maxNum, distance = 0) {
  return Math.floor(Math.random() * maxNum) + distance; // [0,81], [1,82]
}

function handleSelect(element, cellIdx, subIdx) {
  const selectIdx = subIdx + 9 * cellIdx;
  toggleActive(element, selectIdx);
}

// UI functions
function renderCells() {
  let resultCells = "";
  for (let cell = 0; cell < 9; cell++) {
    resultCells += "<div class='cell'>";
    for (let sub = 0; sub < 9; sub++)
      resultCells += `<div class='sub-cell' onclick='handleSelect(this,${cell},${sub})'></div>`;
    resultCells += "</div>";
  }

  gameZone.innerHTML = resultCells;
  subCells = document.querySelectorAll(".sub-cell");

  renderRandomSubs();
}

function renderRandomSubs() {
  let counter = 0;
  while (true) {
    const ranIdx = generateNum(81);
    const ranValue = generateNum(9, 1);
    if (subCells[ranIdx].innerHTML === "") {
      subCells[ranIdx].innerHTML = ranValue;
      subCells[ranIdx].classList.add("randomly");
      counter++;
      if (RANDOM_LIMIT === counter) break;
    }
  }
}

function toggleActive(newElement, newIdx) {
  if (activeSubIdx) subCells[activeSubIdx].classList.remove("active");
  if (newElement) newElement.classList.add("active");
  activeSubIdx = newIdx;
}

function toggleKey(key) {
  if (key !== "Backspace" && subCells[activeSubIdx].innerHTML !== `${key}`)
    subCells[activeSubIdx].innerHTML = key;
  else subCells[activeSubIdx].innerHTML = "";
}

document.addEventListener("keydown", (e) => {
  console.log("e = ", e);
  if (activeSubIdx >= 0) {
    switch (e.key) {
      case "Enter":
        return toggleActive();
      case "Backspace":
        return toggleKey(e.key);
      default:
        if (e.key !== "0" && e.code.startsWith("Digit")) toggleKey(e.key);
    }
  }
});

renderCells();
