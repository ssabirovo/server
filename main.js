"use strict";

// function getUsers(callback) {
//   const jwt = callback();
//   const users = get(jwt)
// }

// function getJWT() {
//   return "213knjksdnjkasndnaopkioasjdiojasiokdmoiasd";
// }

// getUsers(getJWT);

function show() {
  console.log("hello world");
}

let job = "Teacher";

app(show);

function app(callback) {
  callback();
  // console.log(a);
  // show();
}
