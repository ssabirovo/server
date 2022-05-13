"use strict";
const point = document.getElementById("point");

let positions = {
  x: 20,
  y: 20,
};

function updateDisplay() {
  const x = positions.x;
  const y = positions.y;
  point.style.transform = `translate(${x}px, ${y}px)`;
}
function updatePositionRow(distance) {
  let newPosition = positions.x - distance;

  if (newPosition > 380) positions.x = 0;
  else if (newPosition < 0) positions.x = 380;
  else positions.x = newPosition;

  updateDisplay();
}

function updatePositionColumn(distance) {
  let newPosition = positions.y - distance;

  if (newPosition > 380) positions.y = 0;
  else if (newPosition < 0) positions.y = 380;
  else positions.y = newPosition;

  updateDisplay();
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  switch (key) {
    case "ArrowUp":
      return updatePositionColumn(10);
    case "ArrowDown":
      return updatePositionColumn(-10);
    case "ArrowLeft":
      return updatePositionRow(10);
    case "ArrowRight":
      return updatePositionRow(-10);
    default:
      return console.log("Mumkin mas");
  }
});
