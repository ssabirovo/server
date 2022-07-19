class Person {
  name: string;
  phone: string;
  age: number;
  constructor(name: string, phone: string, age: number) {
    this.name = name;
    this.phone = phone;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating...`);
  }
  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}

class Student extends Person {
  salary: number;
  group: number;

  constructor(
    name: string,
    phone: string,
    age: number,
    salary: number,
    group: number
  ) {
    super(name, phone, age);
    this.salary = salary;
    this.group = group;
  }

  study() {
    console.log(`${this.name} is studying...`);
  }
}

const student = new Student("Arslonbek", "+998998961348", 21, 50, 510);
// @ts-ignore
console.log(student.__proto__ === Student.prototype);
console.log(typeof Student.prototype);
// @ts-ignore
console.log(student.__proto__.prototype);
