// ES5
// var age = 20; // number

// ES6
// primitive type
// let a = 20;
// let b = a;
// a = 50;
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// reference type
// let person1 = {
//   age: 20,
//   job: "Teacher",
// };
// let person2 = person1;
// person1.job = "Developer";
// person2.age = 60;
// console.log("person1 = ", person1);

// String firstName = 50;

// let numbers1 = [1, 2, 3];
// let numbers2 = numbers1;
// numbers2[0] = null;

// console.log("numbers1 = ", numbers1);

// console.log("numbers2 = ", numbers2);

// Object type
const person = {
  age: 20,
  job: "teacher",
};
// dot notation
console.log("job = ", person.job);

// bracket notation
console.log("job = ", person["job"]);
