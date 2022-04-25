"use strict";

// function bunnyEars2(bunnies = 0) {
//   if (bunnies === 0) return 0;

//   let isOddBunny = bunnies % 2 === 1;
//   let earsAmount = isOddBunny ? 2 : 3;
//   return earsAmount + bunnyEars2(bunnies - 1)
// }
/**
 * bunnies = [1,2,3,4,5,6]
 * ears    = [2,3,2,3,2,3] => 15
 */

// function triangle(rows) {
//   if (rows === 0) return 0;
//   return rows + triangle(rows - 1);
// }

// console.log(triangle(5));
/**
 *
 *
 *   []   -> 1
 *  [][]  -> 2
 * [][][] -> 3
 */

// function sumDigits1(n) {
//   if (n === 0) return 0;

//   let sum = (n % 10) + sumDigits1(Math.floor(n / 10));
//   return sum;
// }

// sumDigits1(4558);
/**
 * n = 4558 -> sum = 8 + 14 = 22
 * n = 455  -> sum = 5 + 9 = 14
 * n = 45   -> sum = 5 + 4 = 9
 * n = 4    -> sum = 4 + 0 = 4
 * n = 0    -> 0 = 0
 */

// function count7(n) {
//   if (n === 0) return 0;

//   let isExist7 = n % 10 === 7;
//   let count = +isExist7;

//   return count + count7(Math.floor(n / 10));
// }

// function changePi(str = "") {
//   let strLen = str.length;
//   if (strLen < 1) return "";

//   let sub = str.substring;

//   if (str[strLen - 1] == "i" && str[strLen - 2] == "p")
//     return changePi(sub(0, strLen - 2)) + "3.14";
//   return changePi(sub(0, strLen - 1)) + sub(strLen - 1);
// }

// function pairStar(str) {
//   let strLen = str.length;
//   if (strLen === 0) return "";

//   if (str[strLen - 1] === str[strLen - 2])
//     return pairStar(str.substring(0, strLen - 1)) + "*" + str[strLen - 1];
//   return pairStar(str.substring(0, strLen - 1)) + str[strLen - 1];
// }
// /**
//  * str = "aaab" => strLen = 4; => pairStar("aaa") + "b"     => "a*a*ab"
//  * str = "aaa" => strLen = 3; => pairStar("aa") + "*" + "a" => "a*a*a"
//  * str = "aa" => strLen = 2; => pairStar("a") + "*" + "a"   => "a*a"
//  * str = "a" => strLen = 1; => pairStar("") + "a"           => "a"
//  * str = "" => strLen = 0; => ""                            => ""
//  */

// function nestParen(str) {
//   let splitted = str.split("()");
//   if (str === "" || (splitted[0] === "" && splitted[1] === "")) return true;
//   let joined = splitted.join("-");
//   if (str === joined) return false;
//   return nestParen(joined);
// }

// nestParen("((())(())"); // false
/**                                (()()
 * str = "((())(())" -> splitted = ["((",")(",")"], joined = "(()()" => nestParen("(()()") => false
 * str = "(()()" ->  splitted = ["(","",""], joined = "(" => nestParen("(") => false
 * str = "(" -> splitted = ["("], joined = "(" => false
 */

// nestParen("(())(())"); // true
/**
 * str = "(a)(a)" -> splitted = ["(",")(",")"], joined = "()()" => nestParen("()()") => true
 * str = "()()" -> splitted = ["","",""], joined = "" => nestParen("") => true
 * str = "" -> true
 */
