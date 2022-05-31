"use strict";

// const p1 = new Promise((res, rej) => {
//   console.log("Starting first promise...");
//   setTimeout(() => {
//     res("I am first promise");
//   }, 2000);
// });

// const p2 = new Promise((res, rej) => {
//   console.log("Starting second promise...");
//   setTimeout(() => {
//     res("I am second promise");
//   }, 4000);
// });

// Promise.all([p1, p2]).then((values) => {
//   console.log("values = ", values);
// });

// backend functions
function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("searching data of user from database ...");
    const fakeUserData = { username: "arslonbekXX", id };

    setTimeout(() => resolve(fakeUserData), 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    console.log(`searching repos of user(${username}) from database ...`);
    const fakeRepos = ["pdp-b-18", "famic-web", "buduar-web", "shelfi-web"];

    // return reject(new Error("Repos not found"));

    setTimeout(() => resolve(fakeRepos), 3000);
  });
}

function getCommits(repoName) {
  return new Promise((resolve, reject) => {
    console.log(`searching commits of repo(${repoName}) from database ...`);
    const fakeCommits = ["lesson-15 start-codes", "lesson-36 finish-codes"];

    setTimeout(() => resolve(fakeCommits), 2000);
  });
}

const userID = 444;
// getUser(userID)
//   .then((userData) => getRepos(userData.username))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("commits = ", commits));

async function showData() {
  const userData = await getUser(userID);
  console.log("userData = ", userData, "\n\n");

  const repos = await getRepos(userData.username);
  console.log("repos = ", repos, "\n\n");

  const commits = await getCommits(repos[0]);
  console.log("commits = ", commits);
}

showData();
