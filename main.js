"use strict";

console.log(1);

setTimeout(() => {
  console.log("callback 1");
});

console.log(2);

setTimeout(() => {
  console.log("callback 2");
});

for (let i = 3; i < 500; i++) {
  console.log(i);
}
