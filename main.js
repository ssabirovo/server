"use strict";
// const fruitsContainer = document.getElementById("fruits_container");
const items = ["🍅", "🍄", "🥦", "🥕", "🥒", "🌽", "🥑"];

// function renderFruits(fruits = []) {
//   let list = fruits
//     .map(function (fruit, idx) {
//       return `<li>${fruit}</li>`;
//     })
//     .join("");
//   fruitsContainer.innerHTML = list;
// }

// function renderFruitsWithForEach(foods = []) {
//   let list = "";
//   foods.forEach(function (food) {
//     list += `<li>${food}</li>`;
//   });
//   fruitsContainer.innerHTML = list;
// }

// renderFruitsWithForEach(items);

// const users = [
//   {
//     id: "1",
//     age: 22,
//     firstName: "Arslonbek",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "2",
//     age: 18,
//     firstName: "ali",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "3",
//     age: 11,
//     firstName: "jamshid",
//     phoneNumber: "+998991234567",
//   },

//   {
//     id: "4",
//     age: 96,
//     firstName: "bobur",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "5",
//     age: 36,
//     firstName: "nodir",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "6",
//     age: 75,
//     firstName: "jasur",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "7",
//     age: 75,
//     firstName: "ilyos",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "8",
//     age: 75,
//     firstName: "abdulloh",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "9",
//     age: 36,
//     firstName: "arslon",
//     phoneNumber: "+998991234567",
//   },
//   {
//     id: "10",
//     age: 36,
//     firstName: "abror",
//     phoneNumber: "+998991234567",
//   },
// ];

// function search(ageSearch, firstNameSearch) {
//   let ids = [];
//   firstNameSearch = firstNameSearch.toLowerCase();
//   const user = users.find(function (user) {
//     return (
//       user.age === ageSearch ||
//       user.firstName.toLowerCase().includes(firstNameSearch)
//     );
//   });
//   if (!user) return "Not found user";
//   return user;
// }

// console.log(search(25, "josefina"));

// function customSearch(age = 0, firstName = "") {
//   if (typeof age === "string") firstName = age;

//   // find filtered users
//   const filteredUsers = users.filter(function (user, idx) {
//     return (
//       user.age === age ||
//       user.firstName.toLowerCase().includes(firstName.toLowerCase())
//     );
//   });

//   // sort filtered users
//   filteredUsers.sort(function (u_one, u_two) {
//     if (u_one.age === u_two.age)
//       return u_one.firstName > u_two.firstName ? 1 : -1;
//     return u_one.age - u_two.age;
//   });

//   return filteredUsers;
// }

// console.log(customSearch("bek"));

// let numbers = [4, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {}
// console.log("sum = ", sum);

// console.log(
//   "sum = ",
//   numbers.reduce(function (acc, cur) {
//     return acc + cur;
//   })
// );

/**
 * let numbers = [4, 2, 3, 4, 5, 6, 7, 8, 9];
 * acc = 4, cur = 2 -> 6
 * acc = 6, cur = 3 -> 9
 * acc = 9, cur = 4 -> 13
 * acc = 13, cur = 5 -> 18
 * acc = 18, cur = 6 -> 24
 * acc = 24, cur = 7 -> 31
 * acc = 31, cur = 8 -> 39
 * acc = 39, cur = 9 -> 48
 * acc = 48, cur = undefined
 */

// fruitsContainer.innerHTML = items.reduce(
//   (acc, cur) => `${acc}<li>${cur}</li>`,
//   ""
// );

function test(...args) {
  console.log("args = ", args);
}

test`rarsdaskdkansdkjnasd nnnjdkas kjd naskj dkj`;
