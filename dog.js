"use strict";
import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color);
  }

  onSecure() {
    console.log(`${this.name} 👮‍♀️ securing...`);
  }
  onSpeak() {
    console.log(`${this.name} 👮‍♀️ wow-wow...`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color);
  }
  onSee() {
    console.log(`${this.name} 🙈 see ...`);
  }
}

const dog = new Dog("Reks", 1, "black");
const cat = new Cat("Mushukvoy", 1, "black");

console.log(dog);
console.log(cat);

dog.onSpeak();
cat.onSpeak();
dog.onSecure();
cat.onSee();
