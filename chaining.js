"use strict";
// Factory function
function userCreate(name, age, job) {
  const user = Object.create(userStore); // user.__proto__ = userStore
  user.name = name;
  user.age = age;
  user.job = job;
  return user;
}

const userStore = {
  name: "MRX",
  run() {
    console.log(`${this.name} is running...`);
  },
  jump() {
    console.log(`${this.name} is jumping...`);
  },
  changeName(name) {
    this.name = name;
  },
};

const user1 = userCreate("Arslonbek", 21, "Teacher");
/** user1.__proto__ = userMethods */
const user2 = userCreate("Jamshidbek", 26, "Casher");
/** user2.__proto__ = userMethods */
const user3 = userCreate("Boburbek", 22, "Student");
/** user3.__proto__ = userMethods */

user1.__proto__.changeName("Avazbek");
user1.__proto__.run();
user1.run();
console.log("-----------");
user2.run();
console.log("-----------");
user3.run();
