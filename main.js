"use strict";

// function-inside-function
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   // prettier-ignore
//   const juice = `Juice with ${applePieces} pieces
//                  of apple and ${orangePieces} pieces
//                  of orange.`;
//   return juice;
// };

// HOF
// const oneWord = function (str) {
// };

// const upperFirstWord = function (str) {
// };

// const arr = [2, 3, 4, 5];
// Higher-order function
// const transformer = function (str, fn = () => {}) {
//   console.log(arguments.length);
//   console.log(fn.name);
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
// transformer('JavaScript is the best!');

// SIDE EFFECT

// let a = 20;

// function calc() {
//   a = a + 1;
//   return true;
// }

// calc();

// function logger() {
//   console.log("Arslonbek alimbayev");
// }

// -------PARAMETERS AND ARGUMENTS-------
// parameters
// function greeting(firstName, age) {
//   // let firstName = arguments[0];
//   // let age = arguments[1];
//   console.log(`Hello ${firstName}. Age: ${age}`);
//   // console.log(arguments);
// }

// arguments
// greeting("Arslonbek", 21, 22, 11, 23, 12, 321, 322, 3112);
// console.log("-----------");
// greeting("Avazbek", 25);
// console.log("-----------");
// greeting("Murtozxon", 16);

// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// const total_summa = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(`total_summa = ${total_summa}`);

// -------VALUE FUNCTION-------
// function firstWord(str = "") {
//   const firstWord = str.split(" ")[2];
//   return firstWord;
// }
// let users = [{ name: "arslonbek" }, { name: "jamshidbek" }];
// console.log(firstWord("arslonbek yaxshi bola"));

// NON-VALUE FUNCTION
// function deleteUser(idx) {
//   users.splice(idx, 1);
// }

// console.log("users length = ", users.length);
// const test = deleteUser(1);
// console.log(test);
// console.log("users length = ", users.length);

// ---------DEFAULT PARAMETERS-------
// function calcAge(birthYear = 2000, currentYear = 2022) {
//   const age = currentYear - birthYear;
//   return age;
// }

// const age = calcAge(1997, 3000);
// // console.log(`age = ${age}`);

// ------- FUNCTION TYPES -------
// 1 -> Function declaration
// function calcAge(birthYear = 2000) {
//   const age = 2022 - birthYear;
//   return age;
// }
// console.log("my age = ", calcAge(2001));

// 2 -> Function expression
// const calcAge = function (birthYear = 2000) {
//   const age = 2022 - birthYear;
//   return age;
// };
// console.log("my age = ", calcAge());

// 3 -> Function Arrow
// const calcAge = birthYear => 2022 - birthYear;
// console.log("my age = ", calcAge(2001));

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((num, idx) => {
//   console.log(`num = ${num}`);
// });
