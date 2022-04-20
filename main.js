"use strict";
const items = ["🍅", "🍄", "🥦", "🥕", "🥒", "🌽", "🥑"];
// console.log("items = ", items);

// console.log(Number.);

// 5e+27 -> 5*(17**27)
// 5e-27 -> -5*(17**27)
// let nums = [20, 14, 15, 28];
// nums.sort(comFun);
// console.log("nums = ", nums);

// function comFun(a, b) {
//   // if (a > b) return 1;
//   // if (a < b) return -1;
//   // if (a === b) return 0;

//   return Math.random() - 0.5;
// }
/**
 * (diff = a - b)(diff > 0 ? swap : no-swap)
 * Iteration - 1
 * a = 49(1); b = 55(65) -> diff = -6; nums = [1,65,31,44,14];
 * a = 55(65); b = 51(31) -> diff = 4; nums = [1,31,65,44,14];
 * a = 55(65); b = 52(44) -> diff = 3; nums = [1,31,44,65,14];
 * a = 55(65); b = 49(14) -> diff = 6; nums = [1,31,44,14,65];
 *------------
 * Iteration - 2
 * a = 49(1); b = 51(31) -> diff = -2; nums = [1,31,44,14,65];
 * a = 51(31); b = 52(44) -> diff = -1; nums = [1,31,44,14,65];
 * a = 52(44); b = 49(14) -> diff = 3; nums = [1,31,14,44,65];
 * a = 52(44); b = 55(65) -> diff = -3; nums = [1,31,14,44,65];
 *
 *------------
 * Iteration - 3
 * a = 49(1); b = 51(31) -> diff = -2; nums = [1,31,14,44,65];
 * a = 51(31); b = 49(14) -> diff = 2; nums = [1,14,31,44,65];
 *
 * Iteration - 4
 * a = 49(1); b = 51(31) -> diff = -2; nums = [1,31,14,44,65];
 * a = 51(31); b = 49(14) -> diff = 2; nums = [1,14,31,44,65];
 *
 *
 */
// const charts = ["ac", "ab", "cb", "ba", "mu", "k", "u"];
// charts.sort();
// console.log(charts);

const users = [
  {
    age: 22,
    firstName: "arslonbek",
    phoneNumber: "+998991234567",
  },
  {
    age: 18,
    firstName: "ali",
    phoneNumber: "+998991234567",
  },
  {
    age: 11,
    firstName: "jamshid",
    phoneNumber: "+998991234567",
  },

  {
    age: 96,
    firstName: "bobur",
    phoneNumber: "+998991234567",
  },
  {
    age: 36,
    firstName: "nodir",
    phoneNumber: "+998991234567",
  },
  {
    age: 75,
    firstName: "jasur",
    phoneNumber: "+998991234567",
  },
  {
    age: 75,
    firstName: "ilyos",
    phoneNumber: "+998991234567",
  },
  {
    age: 75,
    firstName: "abdulloh",
    phoneNumber: "+998991234567",
  },
  {
    age: 36,
    firstName: "arslon",
    phoneNumber: "+998991234567",
  },
  {
    age: 36,
    firstName: "abror",
    phoneNumber: "+998991234567",
  },
];

function comFn(userOne, userTwo) {
  if (userOne.age === userTwo.age) {
    if (userOne.firstName > userTwo.firstName) {
      return 1;
    } else return -1;
  }
  if (userOne.age > userTwo.age) return 1;
  else if (userOne.age < userTwo.age) return -1;
}
users.sort(comFn);
console.log(users);
