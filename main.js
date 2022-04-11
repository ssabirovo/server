let stringOne = "PDP is the best is to learn";
let stringTwo = "Frontend  and   Backend development end";

// repeat()
// console.log("arslonbek".repeat(3));

// regex
// stringTwo = stringTwo.replace(/y[a-zA-Z]k/gi, "hello");
// console.log(stringTwo);

// search()
// console.log(stringTwo.search(/en[a-zA-Z]/i));

// slice()
// console.log(stringTwo.slice(2, 4));
// console.log(stringTwo);

// split()
// console.log(stringOne.split(/is/));

// function repeat(str, amount) {
//   let tempText = "";
//   for (let i = 0; i < amount; i++) {
//     tempText += str;
//   }
//   return tempText;
// }

// console.log("ars".repeat(4));

// console.log(repeat("ars", 4));

function includes(fullText = "", searchText = "") {
  let isExist = false;
  for (let i = 0; i < fullText.length; i++) {
    if (fullText.substring(i, searchText.length + i) === searchText) {
      isExist = true;
      break;
    }
  }
  return isExist;
}

let text = "jamshidbek mani urdi.";

console.log(text.includes("man"));
console.log(includes(text, "man"));
