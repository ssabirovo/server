"use strict";

export class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  onSpeak() {
    console.log(`${this.name} speaking 🙊 ... `);
  }

  onEat(food) {
    console.log(`${this.name} eating  ${food}`);
  }

  onSleep() {
    console.log(`${this.name} sleeping 😴 ...`);
  }
}
