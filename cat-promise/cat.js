"use strict";

const loadBtn = document.querySelector(".load-btn");
const startZone = document.querySelector(".start-zone");
const loadZone = document.querySelector(".load-zone");
const boxes = document.querySelectorAll(".box");
const images = [
  "./images/img-1.jpg",
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

let isFinishedList = [false, false, false, false];

function imgLoad(imgURL) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imgURL;

    console.log("Image loading...");

    image.addEventListener("load", () => {
      console.log("Image loaded");
      resolve(image.src);
    });
  });
}

loadBtn.addEventListener("click", () => {
  toggleZone();
  images.forEach((imgURL, idx) => {
    addImg(imgURL, idx);
  });
});

function addImg(imgURL, idx) {
  const img = document.createElement("img");
  img.src = imgURL;

  img.addEventListener("load", () => {
    isFinishedList[idx] = true;
    if (!isFinishedList.includes(false)) {
      images.forEach((imgURL, idx) => {
        const _img = document.createElement("img");
        _img.src = imgURL;
        boxes[idx].children[0].remove();
        boxes[idx].appendChild(_img);
      });
    }
  });
}

function toggleZone() {
  startZone.classList.add("hide");
  loadZone.classList.remove("hide");
}
