"use strict";

// import { commits, repos, users } from "./data.js";

// function getUser(userID = 1) {
//   return new Promise((res, rej) => {
//     console.log("Getting user from database...");
//     setTimeout(() => res(users[userID]), 2000);
//   });
// }

// function getRepos(username = "MRX") {
//   return new Promise((res, rej) => {
//     console.log(`Getting repos of ${username} user from database...`);
//     setTimeout(() => res(repos[username]), 4000);
//   });
// }

// function getCommits(repoID = "pdp-b-18") {
//   return new Promise((res, rej) => {
//     console.log(`Getting commits of ${repoID} repo from database...`);
//     setTimeout(() => res(commits[repoID]), 4000);
//   });
// }

// async function infoWithAsync() {
//   const user = await getUser(4);
//   console.log("user = ", user);

//   const repos = await getRepos(user.username);
//   console.log("repos = ", repos);

//   const commits = await getCommits(repos[0]);
//   console.log("commits = ", commits);
// }

// function infoWithPromise() {
//   return Promise.resolve(getUser(4)).then((user) => {
//     console.log("user = ", user);
//     return Promise.resolve(getRepos(user.username)).then(([repo]) => {
//       console.log("repos = ", repos);
//       return Promise.resolve(getCommits(repo)).then((commits) => {
//         console.log("commits = ", commits);
//         return user;
//       });
//     });
//   });
// }

// async function fakeWithAsync() {
//   await 10;
//   console.log("hello world-1");
//   await 40;
//   console.log("hello world-2");
// }

// function fakeWithPromise() {
//   return Promise.resolve(10).then(() => {
//     console.log("hello world-1");
//     return Promise.resolve(40).then(() => {
//       console.log("hello world-2");
//     });
//   });
// }

// infoWithPromise().then((data) => console.log(data));

// function first(a) {
//   console.log(second(a));
// }

// function second(b) {
//   return b * b;
// }

// first(10);

const nums = {
  a: 20,
};

const { a: myA, b: myB = 50 } = nums;

console.log(`myA = ${myA}`);
console.log(`myB = ${myB}`);
