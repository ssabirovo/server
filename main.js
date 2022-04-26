"use strict";

// // function-inside-function
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
