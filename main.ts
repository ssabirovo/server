// class Parent {
//   parentName: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.parentName = name;
//     this.age = age;
//   }

//   run() {
//     console.log(`${this.parentName} is running...`);
//   }
// }

// class Child extends Parent {
//   name: string;
//   age: number;
//   constructor(
//     name: string,
//     age: number,
//     parentName: string,
//     parentAge: number
//   ) {
//     super(parentName, parentAge);
//     this.name = name;
//     this.age = age;
//   }

//   sleep() {
//     console.log(`${this.name} is sleep... age = ${this.age}`);
//   }

//   run() {
//     console.log(`${this.name} is running... age = ${this.age}`);
//   }
// }

// const child = new Child("Rahmonbek", 19, "Murod", 49);

// console.log(child);
// child.run();
// child.sleep();
