// "use strict";
const boxParent = document.querySelector(".box");

// // const newSpanNode = document.createElement("span");
// // newSpanNode.innerText = "MY BOX";

// // const innerSpan = document.getElementById("first");
// // boxParent.insertBefore(newSpanNode, innerSpan);
// // boxParent.insertBefore(newSpanNode, boxParent.childNodes[0]);
// // boxParent.replaceChild(newSpanNode, boxParent.childNodes[2]);

// // const p = document.createElement("p");
// // p.innerText = "Hello World";
// // // boxParent.removeChild(boxParent.children[0]);
// // // boxParent.children[0].remove()
// // boxParent.children[0].replaceWith(p);

// // console.log(boxParent.hasAttribute("class"));

// // const btns = document.querySelectorAll("button");

// // btns[0].onclick = () => {
// //   if (btns[1].hasAttribute("disabled")) {
// //     btns[1].removeAttribute("disabled");
// //   }
// //   btns[0].setAttribute("disabled", true);
// // };

// // btns[1].onclick = () => {
// //   if (btns[0].hasAttribute("disabled")) {
// //     btns[0].removeAttribute("disabled");
// //   }
// //   btns[1].setAttribute("disabled", true);
// // };

// // console.log(boxParent.children[1].getAttribute("class"));

// // console.log(boxParent.classList.contains("toggles"));
// boxParent.classList.add("new-class");
// // boxParent.classList.remove("box");
// // boxParent.classList.add("toggle");

// // boxParent.classList.replace("box", "test-box");
// // boxParent.classList.toggle("toggle", true); // classList.add
// // boxParent.classList.toggle("box", false); // classList.remove
// console.log(`boxParent className = ${boxParent.className}`);
// let name = "Arslonbek";
// function changeName() {
//   name = "Jamshid";
// }
// function showMessage() {
//   alert(`Salom ${name}`);
// }

// boxParent.addEventListener("click", changeName);
// boxParent.addEventListener("click", showMessage);

document.addEventListener("keydown", event => {
 event.code
})
document.addEventListener("click", event => {
 event.key
})