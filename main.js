// // #1 -> Type conversion
// console.log(Number("22"));
// console.log(String(22));

// console.log(Boolean(undefined));
// console.log(!!undefined);
// console.log(typeof !!undefined);

// console.log(Array(2));

// const cart = {
//   123: {
//     name: "pencil 2",
//     price: 100,
//   },
//   333: {
//     name: "Ipad pro",
//     price: 1000,
//   },
// };
// console.log("length  = ", cart[333].name.length);
// console.log("cart = ", cart);

// // Type coercion
// let a = 20;
// console.log("Arslonbek " + a + " yoshda");
// console.log("Arslonbek " + true + " yoshda");
// console.log("Arslonbek " + [123] + " yoshda");

// if (Boolean("20")) {
//   console.log("true");
// } else {
//   console.log("else");
// }

// #3 -> Truthy and falsy values
/**
 * 1 -> undefined
 * 2 -> 0
 * 3 -> null
 * 4 -> false
 * 5 -> ""
 * 6 -> NAN
 *
 *
 */

// console.log("undefined = ", Boolean(undefined));
// console.log("null = ", Boolean(null));
// console.log("0 = ", Boolean(0));
// console.log("NaN = ", Boolean(NaN));
// console.log("false = ", Boolean(false));
// console.log("Empty string = ", Boolean(""));

// console.log("-1 = ", Boolean(-1));

// let isExistUser = true; // false | true
// if (!isExistUser) {
//   console.log("Rost");
// } else {
//   console.log("Yolg'on");
// }

let num1 = Number(prompt("Birinchi raqamni kiriting"));
let num2 = Number(prompt("Ikkinchi raqamni kiriting"));

console.log("typeof num1  = ", typeof num1);
console.log("typeof num2  = ", typeof num2);
console.log(`${num1} + ${num2} = `, num1 + num2);
console.log(num1 + " + " + num2 + " = ", num1 + num2);

if (num1 === num2) {
  console.log("xa teng = ", num1);
} else {
  console.log("yoq, teng emas !");
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
}
