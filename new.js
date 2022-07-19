"use strict";
// Factory function
function UserCreate(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

UserCreate.prototype.run = function () {
  console.log(`${this.name} is running...`);
};
UserCreate.prototype.jump = function () {
  console.log(`${this.name} is jumping...`);
};
UserCreate.prototype.changeName = function (name) {
  this.name = name;
};

const user1 = new UserCreate("Arslonbek", 21, "Teacher");
user1.__proto__.run = () => {
  console.log("Hello World - 1");
};
const user2 = new UserCreate("Jamshidbek", 26, "Casher");
user2.run = () => {
  console.log("Hello World - 2");
};
user1.run(); // 'Hello World - 1'
user1.__proto__.run(); //   'Hello World - 1'
user2.run(); // 'Hello World - 2'
user2.__proto__.run(); // 'Hello World - 1'
