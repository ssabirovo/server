"use strict";
// setTimeout(() => console.log("I am first"), 1000);
// console.log("I am second");
// setTimeout(() => console.log("I am third"), 2000);

const promise = new Promise(executor);

function executor(resolve, reject) {
  let isExistBook = false;
  console.log("...pending...");
  setTimeout(() => {
    console.log("...finish...");
    if (isExistBook) resolve("this is book");
    else reject("this is money");
  }, 5000);
}

promise
  .then(() => {
    console.log("😁😁😁😁😁😁😁");
  })
  .catch(() => {
    console.log("😢🤕😢🤕😢🤕😢🤕😢🤕");
  })
  .finally(() => {
    console.log("🎁🎁🎁🎁🎁🎁🎁");
  });
