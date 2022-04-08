function delDel(str) {
  let tempText = "";
  for (let i = 0; i < str.length; i++) {
    if (str[1] === "d" && str[2] === "e" && str[3] === "l") {
      continue;
    } else {
      tempText += str[i];
    }
  }

  return tempText;
}
