"use strict";

// const a = 20; // new Number()
// const b = 50; // new Number()
// console.log(a.__proto__ === Number.prototype);
// console.log(b.__proto__ === Number.prototype);
// console.log(Number.__proto__ === Function.prototype);
// console.dir(Function.__proto__);

// function box() {}

// console.dir(box.prototype);

function Foo(name) {
  this.name = name;
}

function App(name) {
  this.foo = {};
  this.bar = new Foo(name);
}

const app = new App("Box");

// console.log(app.__proto__ === App.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// app.foo.__proto__ ===

function test() {} // new Function
const a = 20; // new Number()
const b = true; // new Boolean()
console.log(test.__proto__ === Function.prototype);
console.log(a.__proto__ === Number.prototype);
console.log(b.__proto__ === Boolean.prototype);
console.log(Boolean.__proto__ === Function.prototype);

const person = {}; // new Object()

console.log(person.__proto__.__proto__);
