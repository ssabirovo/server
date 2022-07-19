"use strict";

class User {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  run() {
    console.log(`${this.name} is running...`);
  }
  jump() {
    console.log(`${this.name} is jumping...`);
  }
  changeName(name) {
    this.name = name;
  }
}

const user1 = new User("Arslonbek", 21, "Teacher");

const user2 = new User("Jamshidbek", 26, "Casher");

user1.run();
user1.__proto__.run();
// user2.run();
// user2.__proto__.run();

// const user = {
//   name: "arslonbek",
//   run() {
//     console.log(`${this && this.name} is running...`);
//   },
// };
// const person = {
//   name: "Test",
//   jump() {
//     console.log(`${this && this.name} is running...`);
//   },
// };

// const jump = user.run;
// user.run(); // "Arslonbek is running..."
// jump.call(person); //  "Arslonbek is running"
