let namesOfAnimals = ["sharik", "Bobik", "Tayson", "Reks", "oppogoy", "qoplon"];
let defaultNames = ["Arslon"];

// function showNames(names = defaultNames, callback) {
//   for (let i = 0; i < names.length; i++) {
//     callback(names[i]);
//   }
// }

// showNames(namesOfAnimals, showName);

function forEach(list = [], callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}

// console.log("----------custom forEach----------");
// forEach(namesOfAnimals, showName);

// console.log("----------default forEach----------");

// namesOfAnimals.forEach(function (name, index) {
//   console.log(`${index + 1} - name : ${name}`);
// });

function showName(name) {
  console.log(`name : ${name}`);
}

// let oldNumbers = [20, 25, 26, 28];

// function map(list = [], callback) {
//   let tempList = [];
//   for (let i = 0; i < list.length; i++) {
//     let newElement = callback(list[i], i);
//     console.log(`callback(${list[i]}) = `, newElement);
//     tempList[i] = newElement;
//   }
//   return tempList;
// }

// const newNumbers = map(oldNumbers, function (number, index) {
//   return number ** 2;
// });
// const newNumbers = oldNumbers.map(function (number, index) {
//   return number ** 2;
// });

// console.log("newNumbers = ", newNumbers);
