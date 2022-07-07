"use strict";
const user = {
  name: "Arslonbek",
  getUsers() {
    console.log("users getting...");
  },
};

console.log(user);

const admin = Object.create(user);
console.log(admin);

console.log(admin.__proto__ === user);
