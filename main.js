"use strict";

const user1 = Object.create({});
user1.name = "Arslonbek";
user1.age = 21;
user1.job = "Teacher";
user1.showData = function () {
  console.log(`name  = ${this.name}`);
  console.log(`age  = ${this.age}`);
  console.log(`job  = ${this.job}`);
};

const user2 = Object.create(user1); // user2.__proto__ = user1
user2.name = "Jamshidbek";
user2.age = 26;
user2.job = "Casher";
user2.showData = function () {
  console.log(`name  = ${this.name}`);
  console.log(`age  = ${this.age}`);
  console.log(`job  = ${this.job}`);
};

// console.log(user1.__proto__.name === user2.name); // false
// console.log(user1.__proto__.name === user2.__proto_/.name); //
// console.log(user1.name === user2.__proto__.showData);
