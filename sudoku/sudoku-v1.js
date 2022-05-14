const newBtn = document.querySelector(".btn--new");
const eraseBtn = document.querySelector(".btn--erase");
const numBtns = document.querySelectorAll(".btn--num");
const gameZone = document.querySelector(".game-zone");
let subCells = document.querySelectorAll(".sub-cell");

const cellDependentIndexes = {
  0: [
    [1, 2],
    [3, 6],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [5, 8],
  ],
  3: [
    [4, 5],
    [0, 6],
  ],
  4: [
    [3, 5],
    [1, 7],
  ],
  5: [
    [3, 4],
    [2, 8],
  ],
  6: [
    [7, 8],
    [0, 3],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [6, 7],
    [2, 5],
  ],
};
const rowSubDependentIndexes = {
  0: [1, 0, 2],
  1: [0, 1, 2],
  2: [0, 2, 1],
  3: [4, 3, 5],
  4: [3, 4, 5],
  5: [3, 5, 4],
  6: [7, 6, 8],
  7: [6, 7, 8],
  8: [6, 8, 7],
};
const columnSubDependentIndexes = {
  0: [3, 0, 6],
  1: [4, 1, 7],
  2: [5, 2, 8],
  3: [0, 3, 6],
  4: [1, 4, 7],
  5: [2, 5, 8],
  6: [0, 6, 3],
  7: [1, 7, 4],
  8: [2, 8, 5],
};
const board = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
];

function renderCells() {
  let resultCells = "";
  let subCellsIdxAll = 0;
  for (let cell = 0; cell < 9; cell++) {
    resultCells += "<div class='cell'>";
    for (let sub = 0; sub < 9; sub++)
      resultCells += `<div class='sub-cell' onclick='handleSelect(${cell},${sub})'>${subCellsIdxAll++}</div>`;
    resultCells += "</div>";
  }

  gameZone.innerHTML = resultCells;
  subCells = document.querySelectorAll(".sub-cell");
  cells = document.querySelectorAll(".cell");
}

function handleSelect(cellIdx, subIdx) {
  // remove active class all sub elements
  subCells.forEach((sub) => sub.classList.remove("shadow"));

  const subIdxsOfCell = board[cellIdx]; // [1,2,3]
  const rowSubIdxs = getRowSubIdxs(cellIdx, subIdx);
  const columnSubIdxs = getColumnSubIdxs(cellIdx, subIdx);
  const allSubIdxs = [...subIdxsOfCell, ...rowSubIdxs, ...columnSubIdxs];

  addActive(allSubIdxs);
}

function getRowSubIdxs(row, column) {
  const cellIdxs = cellDependentIndexes[row][0];
  const subIdxs = rowSubDependentIndexes[column];
  const idxs = [];

  for (let cellIdx of cellIdxs)
    for (let subIdx of subIdxs) idxs.push(board[cellIdx][subIdx]);
  return idxs;
}

function getColumnSubIdxs(row, column) {
  const cellIdxs = cellDependentIndexes[row][1];
  const subIdxs = columnSubDependentIndexes[column];
  const idxs = [];

  for (let cellIdx of cellIdxs)
    for (let subIdx of subIdxs) idxs.push(board[cellIdx][subIdx]);
  return idxs;
}

function addActive(subIdxs) {
  for (let subIdx of subIdxs) {
    subCells[subIdx].classList.add("shadow");
  }
}

renderCells();
