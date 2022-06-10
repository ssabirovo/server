"use strict";

console.log(1);

setTimeout(() => console.log(2)); // 1 -> 2 -> 3 -> 4

Promise.resolve().then(() => console.log(3)); // 1 -> log(3)

setTimeout(() => console.log(6)); // 3 -> 4

Promise.resolve().then(
  () => setTimeout(() => console.log(4)) // 5
); // 4 -> 2

Promise.resolve().then(() => console.log(5)); // 6 -> 3

console.log(7);

/**
 * Sherbek: [1,7,3,5,2,6,4]
 * Muhammadumar: [1,7,2,3,6,4,5]
 * Samandar: [1,7,2,6,3,5,4]
 * Abdulxoliq | Hasanboy | Arslonbek: [1,7,3,5,4,2,6]
 * Muhammaddiyor: [1,7,3,5,2,6,4]
 * Husniddin: [1,7,3,4,5,2,6]
 * Rahmonbek: [1,7,2,6,3,5,4]
 *
 */

let a = 20;
console.log(`a = ${a}`);



class Main {
 main() {
  
 }

}


