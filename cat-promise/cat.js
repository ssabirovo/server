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

loadBtn.addEventListener("click", () => {
  toggleZone();
  for (let idx = 0; idx < boxes.length; idx++) {
    addImg(images[idx], boxes[idx]);
  }
});

function toggleZone() {
  startZone.classList.add("hide");
  loadZone.classList.remove("hide");
}

function addImg(imgURL, box) {
  const imgElement = document.createElement("img");
  imgElement.src = imgURL;

  imgElement.addEventListener("load", function () {
    box.children[0].remove();
    box.appendChild(imgElement);
  });
}

function imgLoad() {
  
}
