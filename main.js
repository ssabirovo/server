"use strict";

// const p = new Promise((resolve, reject) => {
//   console.log("Loading....");

//   setTimeout(() => {
//     const isIll = true;
//     if (isIll) reject(new Error("Tort pishmadi 😢"));
//     else resolve("Mana Tort 😁");
//   }, 4000);
// });

// // new Error("dasdas") -> {message: ""}

// p.then((value) => {
//   console.log("value = ", value);
// }).catch((err) => {
//   console.log(`err = ${err.message}`);
// });

function factorPromise(name, idx) {
  return new Promise((resolve, reject) => {
    console.log(`Start ${name} promise(p${idx})...`);
    setTimeout(() => {
      resolve(`I am ${name} promise (p${idx})`);
      console.log(`Finished ${name} promise(p${idx}) ${2 * idx} second`);
    }, 2000 * idx);
  });
}

const p1 = factorPromise("first", 1);
const p2 = factorPromise("second", 2);
const p3 = factorPromise("third", 3);
const promises = [p1, p2, p3];

Promise.all(promises).then((values) => {
  console.log("values = ", values);
});
