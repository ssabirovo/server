"use strict";

// function logger(name, lastName, age) {
//   // function body
//   console.log(name + " " + lastName + " " + age + " yoshda");
//   return name;
// }

// let firstName = logger("Jamshidbek", "Alimbayev", 21);
// console.log("firstName = ", firstName);

// let a = 10;
// a = myPow(a);
// console.log("a = ", a);

// function myPow(a) {
//   return a * a;
// }

// function logSum(x, y, z) {
//   console.log(`${x} + ${y} + ${z} = `, x + y + z);
// }

// logSum(1, 2, 3);

/**
 *
 * width : number
 * height : number
 * return: number
 */
// function areaSum(width, height) {
//   return width * height;
// }
/**
 * bizda ikkita togri torutburchak
 * birinchi -> w: 20; h: 30;
 * ikkinchi -> w: 30; h: 15;
 *
 */

// let width1 = 20;
// let height1 = 30;
// let width2 = 30;
// let height2 = 15;
// let area1 = areaSum(width1, height1);
// let area2 = areaSum(width2, height2);
// console.log("area1 = ", area1);
// console.log("area2 = ", area2);

// let a = 20;
// let b = a;
// a = 30;
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

//  {} -> block scope
// function  {} -> function scope
// calling, running, invoke function

// (a**2+b**2)**(1/pow)
// function show(a, b, pow) {
//   const amount = a * a + b * b;
//   return customPow(amount, pow);
// }

// function customPow(amount, pow) {
//   return amount ** (1 / (1 / 2));
// }

// const data = show(3, 4, 1 / 2);
// console.log("data = ", data);

// Array
// let jora1 = "Arslonbek";
// let jora2 = "Bobur";
// let jora3 = "Erkin";
// let jora4 = "Islom";
// let jora5 = "Siroj";
// let jora6 = "Toxir";
//                0           1        2        3         4       5 ...
// const joralar = ["Arslonbek", "Bobur", "Erkin", "Islom", "Siroj", "Toxir"];

// // jora1 -> joralar[0]
// // jora2 -> joralar[1]

// console.log("joralar = ", joralar);

// joralar[1] = "Boburbek";

// console.log("joralar = ", joralar);

// joralar.splice(1, 1);
// console.log("joralar = ", joralar);

// const years = Array(20);
// console.log("years[20] = ", years[15]);

// const list = [true, "arslonbek", null];
// list[3] = null;
// list[20] = "jamshid";
// console.log("list = ", list);
// console.log("list.length = ", typeof list);

// console.log("Hello World 1");
// console.log("Hello World 2");
// console.log("Hello World 3");
// console.log("Hello World 4");
// console.log("Hello World 5");
// console.log("Hello World 6");
// console.log("Hello World 7");

// for (let i = 20; i >= 0; i--) {
//   console.log(` i = ${i}`);
// }

/**
 * cases
 *
 * 1 : a = 20; b = 15
 * 2 : a = -10; b =0
 * 3 : a = 10; b =5.6
 * 4: a = 6; b = 7;
 *
 *
 *
 */
// function findFive(a, b) {
//   // for (let i = 1; true; i++) {
//   // for (let j = 1; j < i; j++) {
//   // }
//   // }
// }

// findFive(10);
//               012345678
let firstName = "arslonbek";
console.log("firstName[2] = ", firstName[2]);
console.log("firstName.length = ", firstName.length);
