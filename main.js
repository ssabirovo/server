function sameEnds(str) {
  let tempText = "";
  let j = 0;
  let strLen = str.length;
  for (let i = Math.ceil(strLen / 2); i < strLen; i++) {
    if (str[i] === str[j]) {
      tempText += str[j];
      j++;
    } else if (j > 0) {
      j = 0;
      tempText = "";
    }
  }
  return tempText;
}

/**
 *        01234567890
 * str = "javaXYZjava"; strLen = 11;
 *
 * i = 6; j = 0; tempText = "" ->  i = 7;
 * i = 7; j = 0; tempText = "" ->  i = 8; j = 1; tempText = "j"
 * i = 8; j = 1; tempText = "" ->  i = 9; j = 2; tempText = "ja"
 * i = 9; j = 2; tempText = "" ->  i = 10; j = 3; tempText = "jav"
 * i = 10; j = 3; tempText = "" ->  i = 11; j = 4; tempText = "java"
 * @return "java";
 */

console.log(sameEnds("javaXYZjava"));

console.log(sameEnds("Hello! and Hello!"));

/**
 * str = "abXYab"; strLen = 6;
 *
 * i = 3; j = 0; tempText = "" ->  i = 4;
 * i = 4; j = 0; tempText = "" ->  i = 5; tempText = "a";
 * i = 5; j = 1; tempText = "a" -> i = 6; tempText = "b";
 * @return "ab";
 */
console.log(sameEnds("abXYab"));
