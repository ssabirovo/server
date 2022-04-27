"use strict";

// function-inside-function
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples); // 16
//   const orangePieces = cutPieces(oranges); // 20

//   // prettier-ignore
//   const juice = `Juice with ${applePieces} pieces
//                  of apple and ${orangePieces} pieces
//                  of orange.`;
//   return juice;
// };

// console.log(fruitProcessor(4, 5));
// HOF
const oneWord = function (str) {
  return str.split(" ")[0];
};

const upperFirstWord = function (str) {
  let allWords = str.split(" ");
  let firstWord = allWords[0];
  firstWord = firstWord.toUpperCase();
  allWords = [firstWord].concat(allWords.slice(1));
  return allWords.join(" ");
};

// const arr = [2, 3, 4, 5];
// Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// console.log("-----------");
// transformer("JavaScript is the best!", oneWord);
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
// let firstName = arguments[0];
// let age = arguments[1];
//   console.log(`Hello ${firstName}. Age: ${age}`);
// console.log(arguments);
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

// const _sum = function (a, b) {
//   return a + b;
// };

// (function (a, b, c) {
//   console.log("Hello Arslonbek");
// })(10, 20, 30);

// console.log(_sum(20, 15));

// let users = (function (names) {
//   return names.map((name, index) => {
//     return { id: index + 2, name };
//   });
// })(["Arslonbek", "Murtozxon"]);
// console.log(users);

// function createUsers(names = []) {
//   return names.((name, index) => {
//     return { id: index + 1, name };
//   });
// }
// let users = createUsers(["Arslonbek", "Murtozxon"]);
// console.log(users);

// function sum(fun) {
//   console.log(`fun name = ${fun.name}`);
// }

// function getData() {}
// function test() {}
// function _test() {}

// sum(function app() {});
// sum(test);
// sum(_test);

// try {
// throw new Error("arslonbek");
// } catch (err) {
//   console.warn("Bizda texnik nosozlik, boshqa bankamantdan yechib koring");
// }

function createSum() {
  function sum(a, b) {
    return a + b;
  }
  return sum;
}

// const summa = createSum();
// summa(10, 15);

// function logger() {
//   console.log("Hello World!!!");
// }

// function bar() {
//   return logger;
// }

// const foo = bar();
// foo();

function buildSumFunction() {
  return function (a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  };
}
const sumFunction = buildSumFunction;
console.log(`summa = ${sumFunction()(1, 2, 3, 4, 5, 6)}`);

// function foo(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }
// function foo(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// const foo = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

// foo(1)(2)(3)(4)(5);

const currentYear = 2050;

function calcAge() {
  let birthYear = arguments[0];
  test();
  return currentYear - birthYear;
}

let a = 0;

const f = () => {
  a = a + 1;
  return a;
};

f(); // 1
f(); // 2
f(); // 2
