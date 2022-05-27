"use strict";

// const person = { age: 22, name: "Arslonbek" };

// // const person1 = {
// //   hobbies: ["reading books"],
// //   age: 20,
// //   name: "Arslonbek",
// //   job: "",
// //   salary: 200,
// //   teacher: "",
// // };
// // // Object.assign({ hobbies: ["reading books"] }, person);

// // // for(let idx in numbers) {
// // //   const number = numbers[idx]
// // // }

// // person1.console.log(person);
// // console.log(person1);
// // console.log(person === person1); // false

// // const numbers = [1, 2, 3, 4, 5];
// /**

//  *
//  *
//  */

// // const anyObject = {
// //   "-0-": 1,
// //   "-1-": 2,
// //   "-2-": 3,
// //   "-3-": 4,
// //   "-4-": 5,
// // };

// // for (let key in anyObject) {
// //   const value = anyObject[key];
// //   console.log(`key = ${key}`);
// //   console.log(`value = ${value}`);
// // }

// // assign(person);

// function assign(...objs) {
//   if (objs.length === 1) return objs[0]; // without clone

//   const newObject = {}; // with clone
//   for (let obj of objs) {
//     for (let key in obj) {
//       newObject[key] = obj[key];
//     }
//   }

//   return newObject;
// }

// const test = { phone: "xx", age: 20 };
// // const newPerson = assign({ phone: "xx", age: 20 }, person);
// let a;
// a = 22;
// a = 20;
// const newPerson = {
//   ...person, // age: 22,name: "Arslonbek"
//   ...test, // phone: "xx", age: 20
// };
// console.log("person = ", person);
// console.log("newPerson = ", newPerson);
// console.log(person === newPerson);

const person = {
  age: 21,
  name: "Arslonbek",
  address: {
    state: "UZB",
    city: "Tashkent",
  },
};

let a = {};
a = 20;
// const newPerson = Object.assign({}, person);
const newPerson = { ...person };
const address = newPerson.address;

address.city = "Turtkul";

console.log("person = ", person);
console.log("newPerson = ", newPerson);
