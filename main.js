"use strict";

const p = new Promise((resolve, reject) => {
  console.log("Loading....");

  setTimeout(() => {
    const isIll = true;
    if (isIll) reject(new Error("Tort pishmadi 😢"));
    else resolve("Mana Tort 😁");
  }, 4000);
});

// new Error("dasdas") -> {message: ""}

p.then((value) => {
  console.log("value = ", value);
}).catch((err) => {
  console.log(`err = ${err.message}`);
});
