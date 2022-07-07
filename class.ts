"use strict";

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Person.prototype.age = age;
  }

  changeName(newName: string) {
    this.name = newName;
  }
}

const p1 = new Person("P1", 20);
