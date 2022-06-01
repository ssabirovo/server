"use strict";
import { images } from "./data.js";
import { loadImg } from "./load-img.js";
const wpOneBtn = document.querySelector(".with-promise-btn");
const wpAllBtn = document.querySelector(".with-promise-all-btn");
const wopOneBtn = document.querySelector(".without-promise-btn");
const wopAllBtn = document.querySelector(".without-promise-all-btn");
const startZone = document.querySelector(".start-zone");
const loadZone = document.querySelector(".load-zone");
const boxes = document.querySelectorAll(".box");
const isFinishedList = [false, false, false, false]; // for wopAll logics

function toggleZone() {
  startZone.classList.add("hide");
  loadZone.classList.remove("hide");
}
// -------Without Promise (WOP)------

wopOneBtn.addEventListener("click", () => {
  toggleZone();

  for (let idx = 0; idx < images.length; idx++)
    addImgForOne(images[idx], boxes[idx]);
});

wopAllBtn.addEventListener("click", () => {
  toggleZone(); // zone toggle
  for (let idx = 0; idx < images.length; idx++)
    addImgForAll(images[idx], boxes[idx], idx);
});

function addImgForOne(imgURL, box) {
  const imgElement = document.createElement("img");
  imgElement.src = imgURL;

  imgElement.addEventListener("load", function () {
    box.children[0].remove();
    box.appendChild(imgElement);
  });
}

function addImgForAll(imgURL, box, idx) {
  const imgElement = document.createElement("img");
  imgElement.src = imgURL;

  imgElement.addEventListener("load", function () {
    isFinishedList[idx] = true;
    if (!isFinishedList.includes(false)) {
      for (let i = 0; i < images.length; i++) {
        const _img = document.createElement("img"); // create img element -> <img src="" />
        _img.src = images[i]; // loading img from browser cache

        boxes[i].children[0].remove(); // removed span element from boxes[i]
        boxes[i].appendChild(_img); // added new img element to boxes[i]
      }
    }
  });
}

// -------With Promise (WP)------
wpOneBtn.addEventListener("click", () => {
  toggleZone(); // zone toggle

  for (let idx = 0; idx < images.length; idx++) {
    loadImg(images[idx], idx).then((loadedImgURL) =>
      addLoadedImgForOne(loadedImgURL, idx)
    );
  }
});

wpAllBtn.addEventListener("click", () => {
  toggleZone(); // zone toggle

  // const promises = [];
  // for (let idx = 0; idx < images.length; idx++) {
  //   const promise = loadImg(images[idx], idx);
  //   promises.push(promise);
  // }

  // Promise.all(promises).then((loadedImgURLS) => {
  //   for (let idx = 0; idx < loadedImgURLS.length; idx++)
  //     addLoadedImgForOne(loadedImgURLS[idx], idx);
  // });
});

function addLoadedImgForOne(loadedImgURL, idx) {
  const imgElement = new Image(); // create img element => <img src="" />
  imgElement.src = loadedImgURL; // img loading from browser cache

  boxes[idx].children[0].remove(); // removed span
  boxes[idx].appendChild(imgElement); // added img element to boxes[i]
}
