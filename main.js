"use strict";

// const box1 = {
//   name: "box-one",
//   width: 200,
//   height: 300,
//   color: "red",
//   calcArea: () => box1.width * box1.height,
// };

// const box2 = {
//   name: "box-two",
//   width: 400,
//   height: 100,
//   color: "yellow",
//   calcArea() {
//     return this.width * this.height;
//   },
// };
// const box3 = {
//   name: "box-two",
//   width: 400,
//   height: 100,
//   color: "yellow",
//   calcArea() {
//     return box3.width * box3.height;
//   },
// };

// const box1 = buildBox("box-one", 200, 300, "red");
// const box2 = buildBox("box-two", 400, 100, "yellow");

// Factory Function
// function buildBox(name, width, height, color) {
//   return {
//     name: "box-one",
//     width,
//     height,
//     color,
//     calcArea() {
//       return width * height;
//     },
//   };
// }

// console.log(box1.calcArea());
// console.log(box2.calcArea());

// "box-one", 200, 300, "red"
class Box {
  constructor(name, width, height, color) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calcArea() {
    console.log(this.height * this.width);
  }
}

const box1 = new Box("box-one", 200, 300, "red");
const box2 = new Box("box-two", 100, 400, "blue");
const box3 = new Box("box-three", 200, 300, "red");
const box4 = new Box("box-four", 100, 400, "blue");

box1.calcArea();
box2.calcArea();
