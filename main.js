"use strict";

let list = [];
let counter = 0;
for (let i = 0; i < 9; i++) {
  let innerList = [];
  for (let j = 0; j < 9; j++) {
    innerList[j] = counter++;
  }
  list[i] = innerList;
}

console.log(list);
