"use strict";

// // factory function
export function createEmployee(name, pricePerHour, workingTime, dayAmount) {
  return {
    name,
    pricePerHour,
    workingTime,
    dayAmount,
    getSalary() {
      const { pricePerHour, workingTime, dayAmount, name } = this;
      console.log(
        `${name}'s salary : ${pricePerHour * workingTime * dayAmount}$`
      );
    },
  };
}
// employee1.getSalary();
// employee2.getSalary();
// employee3.getSalary();

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  setFullName(fullName) {
    this.fullName = fullName;
  }
}

const user = new User("ArslonbekXX", "code.2307@gmail.com", "xyz20042004");
user.setFullName("Arslonbek Alimbayev");
console.log("user = ", user);

const user2 = new User("Arslonbek", "code@gmail.com", "xyz23042304");
console.log("user2 = ", user2);



function app(){

}


console.log(app);