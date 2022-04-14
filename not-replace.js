function notReplace(str = "") {
  let tempText = "";

  for (let i = 0; i < str.length; i++) {
    let prevIsNotLetter = isNotLetter(str[i - 1]);
    let nextIsNotLetter = isNotLetter(str[i + 2]);

    if (str.substr(i, 2) === "is" && prevIsNotLetter && nextIsNotLetter) {
      tempText += "is not";
      i += 1;
    } else {
      tempText += str[i];
    }
  }
  return tempText;
}
//                      012345678901234
console.log(notReplace("Dis is bliss is"));

/**
 * str = "Dis is bliss is" -> "Dis is not bliss is not"
 * i = 0; tempText = ""  -> prevIsNotLetter = true; nextIsNotLetter = false; tempText = "D";
 * i = 1; tempText = "D" -> prevIsNotLetter = false; nextIsNotLetter = true; tempText = "Di";
 * i = 2; tempText = "Di" -> prevIsNotLetter = false; nextIsNotLetter = false; tempText = "Dis";
 * i = 3; tempText = "Dis" -> prevIsNotLetter = false; nextIsNotLetter = false; tempText = "Dis ";
 * i = 4; tempText = "Dis " -> prevIsNotLetter = true; nextIsNotLetter = true; tempText = "Dis is not";
 * i = 5; tempText = "Dis is not" -> prevIsNotLetter = false; nextIsNotLetter = false; tempText = "Dis is not ";
 * i = 6; tempText = "Dis is not " -> prevIsNotLetter = false; nextIsNotLetter = false; tempText = "Dis is not ";
 * @returns
 */

function isNotLetter(char) {
  if (!char) return true;
  return !(char.length === 1 && !!char.match(/[a-z]/i));
}
