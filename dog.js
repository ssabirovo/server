"use strict";
import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(name, age, color, isBig) {
    super();
    this.isBig = isBig;
  }

  onSecure() {
    console.log(`${this.name} 👮‍♀️ securing...`);
  }
  onSpeak() {
    console.log(`${this.name} 👮‍♀️ wow-wow...`);
  }
  onShow() {
    console.log(`${this.name} big 🦮`);
  }
}

class Cat extends Animal {
  onSee() {
    console.log(`${this.name} 🙈 see ...`);
  }
}

const dog = new Dog("Reks", 1, "black", true);
console.log(dog);
dog.onSpeak();
dog.onSecure();
dog.onShow();

const cat = new Cat("Mushukvoy", 1, "black", "red");
console.log(cat);
cat.onSpeak();
cat.onSee();
