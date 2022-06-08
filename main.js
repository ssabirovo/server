"use strict";

// front functions
function displayUser(user) {
  console.log("user = ", user); // { userID: "abc123", username: "arslonbekXX" }
  getRepos(user.username, displayRepos);
}

function displayRepos(repos) {
  console.log("repos = ", repos); // ["buduar-web", "shelfi.io", "pdp-b-18"]
  getCommit(repos[0], displayCommit);
}

function displayCommit(commit) {
  console.log(`commit = `, commit);
}

// BackEnd
function getUser(userID, callback) {
  const randomTime = Math.floor(Math.random() * 5000);
  console.log(`user searching in database of github.com...`);

  setTimeout(() => {
    const user = { userID, username: "arslonbekXX" }; // from backend endpoint
    console.log(`Finished ${randomTime / 1000}s`);
    callback(user);
  }, randomTime);
}

function getRepos(username, callback) {
  const randomTime = Math.floor(Math.random() * 5000);
  console.log(`repos of user searching in database of github.com...`);

  setTimeout(() => {
    const repos = ["buduar-web", "shelfi.io", "pdp-b-18"]; // from backend endpoint
    callback(repos);
  }, randomTime);
}

getUser("abc123", displayUser);

/**
 * ✅ har bitta return faqat ota function uchun
 */
