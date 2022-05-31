// "use strict";

// frontend functions
// getUser(123, displayUser);

// function displayUser(userData) {
//   console.log("userData = ", userData, "\n\n");
//   const username = userData.username;

//   const repos = getRepos(username, displayRepos);
// }

// function displayRepos(repos) {
//   console.log("repos = ", repos, "\n\n");
//   const repoName = repos[0];

//   getCommits(repoName, displayCommits);
// }

// function displayCommits(commits) {
//   console.log("commits = ", commits, "\n\n");
// }

// // backend functions
// function getUser(id, callback) {
//   console.log("searching data of user from database ...");
//   const fakeUserData = { username: "arslonbekXX", id };
//   // ...
//   setTimeout(() => callback(fakeUserData), 2000);
// }

// function getRepos(username, callback) {
//   console.log(`searching repos of user(${username}) from database ...`);
//   const fakeRepos = ["pdp-b-18", "famic-web", "buduar-web", "shelfi-web"];
//   // ...
//   setTimeout(() => callback(fakeRepos), 3000);
// }

// function getCommits(repoName, callback) {
//   console.log(`searching commits of repo(${repoName}) from database ...`);
//   const fakeCommits = ["lesson-15 start-codes", "lesson-36 finish-codes"];

//   setTimeout(() => callback(fakeCommits), 2000);
// }
