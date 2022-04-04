const body = document.body;
const title = document.querySelector(".title");
const box1 = document.getElementById("box_1");
const box2 = document.getElementById("box_2");
const box3 = document.getElementById("box_3");
const box4 = document.getElementById("box_4");
const box5 = document.getElementById("box_5");
const box6 = document.getElementById("box_6");
const box7 = document.getElementById("box_7");
const box8 = document.getElementById("box_8");

let color1 = randomColor();
box1.style.background = color1;
box1.innerHTML = color1;

let color2 = randomColor();
box2.style.background = color2;
box2.innerHTML = color2;

let color3 = randomColor();
box3.style.background = color3;
box3.innerHTML = color3;

let color4 = randomColor();
box4.style.background = color4;
box4.innerHTML = color4;

let color5 = randomColor();
box5.style.background = color5;
box5.innerHTML = color5;

let color6 = randomColor();
box6.style.background = color6;
box6.innerHTML = color6;

let color7 = randomColor();
box7.style.background = color7;
box7.innerHTML = color7;

let color8 = randomColor();
box8.style.background = color8;
box8.innerHTML = color8;

//  UI functions

//  LOGIC functions
function randomColor() {
  let chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
}

function showData(box) {
  body.style.background = box.innerHTML;
  title.innerHTML = box.innerHTML;
}

box1.addEventListener("click", function () {
  showData(box1);
});
box2.addEventListener("click", function () {
  showData(box2);
});
box3.addEventListener("click", function () {
  showData(box3);
});
box4.addEventListener("click", function () {
  showData(box4);
});
box5.addEventListener("click", function () {
  showData(box5);
});
box6.addEventListener("click", function () {
  showData(box6);
});
box7.addEventListener("click", function () {
  showData(box7);
});
box8.addEventListener("click", function () {
  showData(box8);
});
