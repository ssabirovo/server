"use strict";
// const box1 = document.querySelector(".box-1");
// const box2 = document.querySelector(".box-2");

// box1.textContent = "this is Box-1";

// v2 querySelectorAll

// const elements = document.querySelectorAll(
//   ".box-1, .box-2[href='hello world']"
// );
// console.log("boxes = ", boxes);
// boxes.forEach((box) => {
//   box.textContent = "Hello World";
// });

// for (let element of elements) {
//   element.innerHTML = "Hello World";
// }

// const box1 = document.querySelector(".box-1");
// const ul = document.querySelector("ul");

// console.log(ul.firstElementChild);
// console.log(ul.firstElementChild.parentNode.parentNode.parentNode.parentNode);

// const decrement = document.getElementById("dec");
// const increment = document.getElementById("inc");
// const div = document.querySelector("div");
// const body = document.body;
// let counter = 0;

// const counterDiv = `<button onclick="body.style.backgroundColor='red'">Click Me</button>`;
// body.innerHTML = counterDiv;

// // events
// increment.onclick = () => {
//   counterDiv.textContent = `counter : ${++counter}`;
// };
// decrement.onclick = () => {
//   counterDiv.textContent = `counter : ${--counter}`;
// };
const div = document.querySelector("div");
const btn = document.createElement("button");
btn.textContent = "click me".toUpperCase();
btn.id = "click me";

console.log(div.childNodes);
div.insertBefore(btn, div.children[0]);
console.log(div.childNodes);
