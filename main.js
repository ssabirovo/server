"use strict";

const aBtn = document.querySelector(".a");
const bBtn = document.querySelector(".b");
const cBtn = document.querySelector(".c");

aBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("CLICKED A BTN");
});
bBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("CLICKED B BTN");
});
cBtn.addEventListener("click", (e) => {
  console.log("CLICKED C BTN");
  e.stopPropagation();
});
