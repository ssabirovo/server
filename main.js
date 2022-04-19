const items = ["🍅", "🍄", "🥦", "🥕", "🥦", "🥒", "🌽", "🥕", "🥑"];

// const isArray = Array.isArray(items);
// console.log("isArray = ", isArray);
// console.log(items);
// let mySet = new Set(items);

// items.forEach(function (a) {
//   console.log(a);
// });
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }
// console.log("-------------");
// mySet.forEach(function (a) {
//  console.log(a);
// });
// for (let i = 0; i < mySet.size; i++) {
//   console.log(mySet[i]);
// }

// solution without Set
function solutionWithoutSet(list = []) {
  const itemsObj = {};
  for (let i = 0; i < items.length; i++) {
    let _key = items[i];
    itemsObj[_key] = _key;
  }
  const newList = Object.values(itemsObj);
  console.log(list);
  console.log(newList);
}

// const person = {
//   age: 20,
//   phone: "+998...",
// };
// console.log("person = ", person);

solutionWithoutSet(items);
