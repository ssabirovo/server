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

// LOGIC functions

function generateNum(maxNum, distance = 0) {
  return Math.floor(Math.random() * maxNum) + distance; // [0,81], [1,82]
}

function handleSelect(element, cellIdx, subIdx) {
  const selectIdx = subIdx + 9 * cellIdx;
  toggleActive(element, selectIdx);
}

function addListeners() {
  newBtn.addEventListener("click", onNew);
  eraseBtn.addEventListener("click", onErase);
  document.addEventListener("keydown", onKeyDown);
  numBtns.forEach((numBtn) => numBtn.addEventListener("click", onClickNumBtn));
  gameZone.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", () => toggleActive());
}

// Event handlers
function onKeyDown(e) {
  const isRandomly = subCells[activeSubIdx].classList.contains("randomly");
  if (activeSubIdx >= 0 && !isRandomly) {
    switch (e.key) {
      case "Enter":
        return toggleActive();
      case "Backspace":
        return toggleKey(e.key);
      default:
        if (e.key !== "0" && e.code.startsWith("Digit")) toggleKey(e.key);
    }
  }
}

function onErase(e) {
  e.stopPropagation();
  const isRandomly = subCells[activeSubIdx].classList.contains("randomly");
  if (activeSubIdx >= 0 && !isRandomly) {
    toggleKey("Backspace");
  }
}

function onNew(e) {
  e.stopPropagation();
  subCells.forEach((sub) => {
    sub.classList.remove("randomly");
    sub.innerHTML = "";
  });
  renderRandomSubs();
  // return undefined;
}

function onClickNumBtn(e) {
  e.stopPropagation();
  const isRandomly = subCells[activeSubIdx].classList.contains("randomly");
  if (activeSubIdx >= 0 && !isRandomly)
    if (subCells[activeSubIdx].innerHTML !== e.target.innerText) {
      subCells[activeSubIdx].innerHTML = e.target.innerText;
      checkFilled();
    } else subCells[activeSubIdx].innerHTML = "";
}

// UI functions

function renderCells() {
  let resultCells = "";
  const fragment = document.createDocumentFragment();

  for (let cell = 0; cell < 9; cell++) {
    const div = document.createElement("div"); // <div></div>
    div.setAttribute("class", "cell"); // <div class="cell"></div>

    for (let sub = 0; sub < 9; sub++) {
      const innerDiv = document.createElement("div"); // <div></div>
      innerDiv.setAttribute("class", "sub-cell"); // <div class="sub-cell"></div>
      innerDiv.setAttribute("onclick", `handleSelect(this,${cell},${sub})`); // <div class="sub-cell" onclick="handleSelect(this,0,0)"></div>
      div.appendChild(innerDiv);
    }

    fragment.appendChild(div);
  }

  gameZone.appendChild(fragment);
  subCells = document.querySelectorAll(".sub-cell");

  renderRandomSubs();
}

function renderRandomSubs() {
  let counter = 0;
  while (true) {
    const ranIdx = generateNum(81);
    const ranValue = generateNum(9, 1);
    if (subCells[ranIdx].innerHTML === "") {
      subCells[ranIdx].innerHTML = ranIdx;
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
  if (key !== "Backspace" && subCells[activeSubIdx].innerHTML !== `${key}`) {
    subCells[activeSubIdx].innerHTML = key;
    checkFilled();
  } else subCells[activeSubIdx].innerHTML = "";
}

function checkFilled() {
  let isFinished = true;
  subCells((sub) => {
    if (sub.innerHTML === "") isFinished = false;
  });

  if (isFinished) {
    const value = confirm("Oyin tugadi, yangi oyin boshlaysanmi ?");
    if (value) onNew();
  }
}

function init() {
  renderCells();
  addListeners();
}

init();
