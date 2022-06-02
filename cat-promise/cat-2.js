"use strict";
import { generateBox, generatePromise } from "./utils.js";

let boxes = document.querySelectorAll(".box");
const boxesContainer = document.querySelector(".boxes");
const showMoreBtn = document.querySelector(".show-more-btn");

showMoreBtn.addEventListener("click", () => {
  boxes = [];
  for (let idx = 0; idx < 4; idx++) {
    const box = generateBox();
    boxesContainer.appendChild(box);
    boxes.push(box);
    showMoreBtn.disabled = true;
  }

  init();
});

function init() {
  const promises = generatePromise(4);

  Promise.all(promises).then((loadedImgURLS) => {
    for (let idx = 0; idx < loadedImgURLS.length; idx++) {
      // img element generate
      const loadedImg = loadedImgURLS[idx];
      const imgElement = document.createElement("img");
      imgElement.src = loadedImg;

      const box = boxes[idx]; // div.box[idx]
      const innerBox = box.children[0]; // div.inner-box
      const randomBtn = box.children[1];
      innerBox.children[0].remove();
      innerBox.appendChild(imgElement);
      randomBtn.disabled = false;

      randomBtn.addEventListener("click", (event) => {
        const innerBox = box.children[0];
        const spinner = document.createElement("span");
        spinner.className = "spinner";
        innerBox.children[0].remove(); // img remove
        innerBox.appendChild(spinner); // add spinner

        randomBtn.disabled = true;
        const [promise] = generatePromise(1);
        promise.then((loadedImgURL) => {
          innerBox.children[0].remove(); // span remove
          const _img = document.createElement("img");
          _img.src = loadedImgURL;
          innerBox.appendChild(_img); // add img
          randomBtn.disabled = false;
        });
      });
    }
    showMoreBtn.disabled = false;
  });
}

window.addEventListener("load", init);
