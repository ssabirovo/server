let name1 = "Arslonbek";
let name2 = "Erkin";
let name3 = "Bobur";
let namesOfClassmates = ["Arslonbek", "Erkin", "Bobur", "Omirbek"];
let _contacts = ["123123", "123124", "123125", "123126"];

function greeting(names, contacts, callback) {
  for (let i = 0; i < names.length; i++) {
    // console.log("Hello " + names[i]);
    callback(names[i], contacts[i]);
  }
}

function showContact1(name, contact) {
  console.log(`${name} contact : ${contact}`);
}
function showContact2(name, contact) {
  console.log(`${contact} contact of ${name}`);
}

console.log("----------1(showContact1)");
greeting(namesOfClassmates, _contacts, showContact1);

console.log("----------2(showContact2)");
greeting(namesOfClassmates, _contacts, showContact2);
