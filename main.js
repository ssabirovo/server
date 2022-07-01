"use strict";

// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   run(suffix = "", subSuffix = "") {
// //     console.log(`${this.name} is running... ${suffix}${subSuffix}`);
// //   }
// // }

// // class Student {
// //   constructor(name) {
// //     this.name = name;
// //   }
// // }

// // const person = new Person("Arslonbek");
// // const student = new Student("Avazbek");
// // const run = person.run.bind(student);

// // run();

// // const text = `{"name" : "arslonbek"}`;
// // const data = JSON.parse(text);

// // console.log("data = ", data);

// let person = {
//   name: "John",
//   age: 25,
//   expertise: "Software Developer",
//   address: {
//     state: "UZB",
//     city: "Tashkent",
//     info: {
//       location: {
//         lat: 20,
//         lon: 20,
//       },
//       data: {
//         description: "hello world",
//       },
//     },
//   },
// };

// let person1 = assign({}, person);

// function assign(first, second) {
//   if (!first) return second;

//   let tempObj = {};

//   for (let key in first) {
//     if (typeof first[key] === "object") {
//       tempObj[key] = assign({}, first[key]);
//     } else {
//       tempObj[key] = first[key];
//     }
//   }

//   for (let key in second) {
//     if (typeof second[key] === "object") {
//       tempObj[key] = assign({}, second[key]);
//     } else {
//       tempObj[key] = second[key];
//     }
//   }

//   return tempObj;
// }

// console.log(person1 === person);

// person.address.info.data.description = "New Desc";
// person.name = "Ban";
// console.log(person.address.info.data);
// console.log(person1.address.info.data);

const job1 = {
  name: "Teacher",
  salary: 400,
};

const job2 = {
  myName: "Developer",
  mySalary: 40000,
};

function assign(first, second) {
  if (!first) return second;

  for (let key in second) {
    if (typeof second[key] === "object") {
      first[key] = assign({}, second[key]);
    } else {
      first[key] = second[key];
    }
  }

  return first;
}

let job = assign(assign({}, job1), job2);

console.log(job);
console.log(job1);
console.log(job2);

