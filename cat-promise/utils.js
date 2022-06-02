import { images } from "./data.js";
import { loadImg } from "./load-img.js";

export function randomImg() {
  const idx = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${idx}/3200/2000`;
}

export function generatePromise(imgCount = 4) {
  const promises = [];
  for (let i = 0; i < imgCount; i++) {
    const randomlyImgURL = randomImg();
    const promise = loadImg(randomlyImgURL, i);
    promises.push(promise);
  }
  return promises;
}

export function generateBox() {
  const box = document.createElement("div");
  box.className = "box";

  const innerBox = document.createElement("div");
  innerBox.className = "inner-box";

  const spinner = document.createElement("span");
  spinner.className = "spinner";

  const randomBtn = document.createElement("button");
  randomBtn.className = "random-btn";
  randomBtn.innerText = "Random";
  randomBtn.disabled = true;

  innerBox.appendChild(spinner);
  box.appendChild(innerBox);
  box.appendChild(randomBtn);
  return box;
}
