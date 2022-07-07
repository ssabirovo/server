"use strict";

// const x = 20; // new Number()
// const y = 40; // new Number()
// const obj = {}; // new Object()
// function app() {} // new Function()
// console.log(x.__proto__ === Number.prototype);
// console.log(y.__proto__ === Number.prototype);
// console.log(obj.__proto__ === Object.prototype);
// console.log(app.__proto__ === Function.prototype);

// function Color(color) {
//   this.color = color;
// }

// function Box(name, color) {
//   this.name = name;
//   this.color = new Color(color);
// }

// Box.prototype.run = function () {
//   console.log(`${this.name} is running...`);
// };

// const box = new Box("Boxjon");
// console.log(box);
// box.run();

function Foo() {} // new Function()
/**
 * Foo.__proto__ === Function.prototype
 * Foo.prototype === {} // new Object
 * Foo.prototype.__proto__ === Object.prototype
 */

// const foo = new Foo();
// console.log(foo instanceof Foo);
// console.log(Foo instanceof Function);
// console.log(Function instanceof Function);
// console.log(Function instanceof Object);
/**
 * foo.__proto__ === Foo.prototype
 */

// const bar = new Object(); // new Object()
/**
 * bar.__proto__ === Object.prototype
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  Person.prototype.age = age;
}

Person.prototype.changeName = function (newName) {
  this.name = newName;
};

const muhiddin = new Person("Muhiddin", 19);
const inomjonbek = new Person("Inomjonbek", 20);

muhiddin.__proto__.changeName("Avazbek");

muhiddin.__proto__.changeName = (newName) => {
  this.name = newName;
};

inomjonbek.changeName("Rahmonbek");
console.log(muhiddin); // { age: 19, name: "Avazbek" }
console.log(muhiddin.__proto__); // { age: 19, changeName: f(){} }
console.log(inomjonbek); // { age: 20, name: "Rahmonbek" }
console.log(inomjonbek.__proto__); // { age: 20, changeName: f(){} }

// function Box(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Box.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };

// const box = new Box("Box", "red");
// box.changeColor("green");

// console.log(box);
