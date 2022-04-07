"use strict";

//          0123456789     2345678
// let text = "helloworld"; // lloworl

// let tempText = "";
// for (let i = 2; i < text.length - 1; i++) {
//   tempText = tempText + text[i];
//   console.log(`i = ${i} -> tempText = ${tempText}`);
// }
// console.log("tempText = ", tempText);

// Daftar
/**
 *  i = 2 -> tempText = l
 *  i = 3 -> tempText = ll
 *  i = 4 -> tempText = llo
 *  i = 5 -> tempText = llow
 *  i = 6 -> tempText = llowo
 *  i = 7 -> tempText = llowor
 *  i = 8 -> tempText = lloworl
 *
 *
 *
 */

function subString(text, startIndex, endIndex) {
  let tempText = "";
  for (let i = startIndex; i < endIndex; i++) {
    console.log(`text[${i}] = ${text[i]}`);
    tempText = tempText + text[i];
  }
}

//         01234
subString("hello", 1, 4); // ell

//         012345
// subString("abcabc", 3, 4); //  a

// //         0
// subString("a", 0, 0); //  ""
