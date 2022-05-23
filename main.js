"use strict";
let fruits = ["🍏", "🍊", "🍌", "🍉", "🍍", "🍒", "🍓"];

// function logger() {
//   const [firstFruit, secondFruit, ...endFruits] = fruits;

// const firstFruit = fruits[0]; // "🍏"
// const secondFruit = fruits[1]; // "🍊"
// const endFruits = fruits.slice(2);

//   for (let fruit of endFruits) console.log(`fruit = ${fruit}`);
// }

// logger();

// // let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sum(a, b, c, d = 20) {
//   const summa = numbers.reduce((acc, cur) => acc + cur, 0);
//   console.log("summa = ", summa);
// }

// sum(1, 2, 3);

// const [a, , c, d] = [1, undefined, 3, 4];
// console.log(`a = ${a}`);
// // console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);

// const _person = {
//   firstName: "Arslonbek",
//   age: 21,
//   job: "Teacher",
//   salary: 0,
// };

// function personData({ firstName, age }) {
//   console.log(`firstName = ${firstName}`);
//   console.log(`age = ${age}`);
// }

// // personData(_person);
// const btn = document.getElementById("btn");
// const person = {
//   firstName: "Arslonbek",
//   age: 21,
//   job: "Teacher",
//   salary: 0,
//   address: {
//     state: "UZBEKISTAN",
//     city: "Tashkent",
//   },
// };

// const age = person.age;
// console.log(`age = ${age}`);

// const { age } = person;
// console.log(`age = ${age}`);

// btn.addEventListener("click", ({ target }) => {
//   target.style.backgroundColor = "red";
// });

// const { age, firstName, address: { city, state} } = person;
// // const { city, state } = address;s

// const age = person.age;
// const firstName = person.firstName;
// const city = person.address.city;
// const state = person.address.state;

// console.log(`firstName = ${firstName}`);
// console.log(`age = ${age}`);
// console.log(`city = ${city}`);
// console.log(`state = ${state}`);

// function sum(...newNumbers) {
//   return a + b + c + d;
// }

// const numbers = [1, 2, 3, 4];
// // const summa = sum(numbers[0], numbers[1], numbers[2], numbers[3]);
// const summa = sum(...numbers);
// console.log(`summa = ${summa}`);

// let fruits1 = ["🍏", "🍊", "🍌"];
// let fruits2 = ["🍍", "🍒", "🍓"];

// let allFruits = fruits1.concat(fruits2); // ["🍏", "🍊", "🍌", "🍍", "🍒", "🍓"];
// let allFruits = [...fruits1, ...fruits2, "🍇"]; // ["🍏", "🍊", "🍌","🍍", "🍒", "🍓","🍇",];

// let [first, second, third, ...fruits2] = allFruits;

let numbers = [1, 2, 3, 5];
// let newNumbers = [...numbers]; // [1, 2, 3, 5]
// logger(numbers);

const address = { city: "Tashkent", state: "Russian" };

const person = {
  age: 20,
  firstName: "Arslonbek",
  address: { city: "Tashkent", state: "Russian" },
};

const { age, ...data } = personb;

data = {
  firstName: "Arslonbek",
  address: { city: "Tashkent", state: "Russian" },
};
