"use strict";

// const person = {
//   name: "arslonbek",
//   run() {
//     console.log(`${this.name} is running...`);
//   },
// };

// const user1 = {};
// user1.__proto__ = person; // user1 = Object.create(person)
// user1.name = "Boburbek";
// console.log(user1.__proto__ === Object.getPrototypeOf(user1));

// const text = "Hello World"; // new String()
// const result = Object.getPrototypeOf(text); // text.__proto__;
// console.log("result = ", result);
// console.log(result === String.prototype);
// console.log(result === text.__proto__);

function Box(name, color) {
  this.name = name;
  this.color = color;
  Box.prototype.color = color;
}

Box.prototype.changeName = function (name) {
  this.name = name;
};
function Cubic(name, color) {
  this.name = name;
  this.color = color;
  Box.prototype.color = color;
}

Cubic.prototype.changeCubicName = function (name) {
  this.name = name;
};

const box = new Box("Box-1", "red");
const box1 = Object.setPrototypeOf(Cubic.prototype, Box.prototype);
console.log("box1 = ", box1);
