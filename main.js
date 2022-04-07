"use strict";

// //          0123456789     2345678
// // let text = "helloworld"; // lloworl

// // let tempText = "";
// // for (let i = 2; i < text.length - 1; i++) {
// //   tempText = tempText + text[i];
// //   console.log(`i = ${i} -> tempText = ${tempText}`);
// // }
// // console.log("tempText = ", tempText);

// // Daftar
// /**
//  *  i = 2 -> tempText = l
//  *  i = 3 -> tempText = ll
//  *  i = 4 -> tempText = llo
//  *  i = 5 -> tempText = llow
//  *  i = 6 -> tempText = llowo
//  *  i = 7 -> tempText = llowor
//  *  i = 8 -> tempText = lloworl
//  *
//  *
//  *
//  */

// function subString(text, startIndex, endIndex) {
//   if (endIndex > text.length) endIndex = text.length;

//   let tempText = "";
//   for (let i = startIndex; i < endIndex; i++) {
//     tempText = tempText + text[i]; //
//     // tempText = "" + "c" -> "c"
//   }

//   return tempText;
// }

// /**
//  *  Loop
//  *
//  * i = 2 -> tempText = "" + "c" -> "c"
//  * i = 3 -> tempText = "c" + "d" -> "cd"
//  * i = 4 -> tempText = "cd" + "e" -> "cde"
//  * i = 5 -> tempText = "cde" + "f" -> "cdef"
//  * i = 6 -> stop;
//  *
//  */

// //         01234
// subString("hello", 1, 4); // ell

// //         012345
// const data = subString("abcdef", 1, 20); //  bcdef
// console.log("data = ", data);

// // //         0
// subString("a", 0, 0); //  ""
const users = [
  "Hasanboy",
  "Muhammaddiyor Q",
  "Abdunosir",
  "Muhammaddiyor R",
  "Inomjon",
  "Rahmon",
  "Muhiddin",
  "Husniddin",
  "Abdulholiq",
  "Muhammadali",
  "Muhammadumar",
  "Avazbek",
  "Samandar",
  "Murtozxon",
  "Dilshodbek",
].sort(() => Math.random() - 0.5);

console.log("users = ", users);
