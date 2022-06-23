"use strict";

const person = {
  firstName: "Arslonbek",
  phoneNumber: "+998998961348",
  address: {
    state: "Uzbekistan",
    city: "Tashkent",
  },
  run(a, b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`${this.firstName}  🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ running...`);
  },
};

const toshbaqa = {
  firstName: "ToshbaqaZZ",
  phoneNumber: "+998998961111",
  address: {
    state: "Uzbekistan",
    city: "Tashkent",
  },
};

// person.run(20, 30);
person.run.bind(toshbaqa)(1, 2);

// person.run.call(toshbaqa, 1, 2);
// person.run.apply(toshbaqa, [1, 2]);

// person1.show = person.showInfo;
// person1.show();

// console.log(show === person.showInfo);

// class Person {
//   name = "Arslonbek";
//   showName() {
//     console.log(`my name is ${this.name}`);
//   }
// }

// const _person = new Person();

// _person.showName();

// app.call(_person);
// console.log(_person);

// function app() {
//   console.log(`v2 : my name is ${this.name}`);
// }
