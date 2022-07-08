"use strict";

import { commits, repos, users } from "./data.js";

function getUser(userID = 1) {
  return new Promise((res, rej) => {
    console.log("Getting user from database...");
    setTimeout(() => res(users[userID]), 2000);
  });
}

function getRepos(username = "MRX") {
  return new Promise((res, rej) => {
    console.log(`Getting repos of ${username} user from database...`);
    setTimeout(() => res(repos[username]), 4000);
  });
}

function getCommits(repoID = "pdp-b-18") {
  return new Promise((res, rej) => {
    console.log(`Getting commit of ${repoID} repo from database...`);
    setTimeout(() => res(commits[repoID]), 4000);
  });
}

async function infoWithAsync() {
  const user = await getUser(4);
  console.log("user = ", user);

  const repos = await getRepos(user.username);
  console.log("repos = ", repos);

  const commits = await getCommits(repos[0]);
  console.log("commits = ", commits);
}

function infoWithPromise() {}

async function fakeWithAsync() {
  await 10;
  console.log("hello world-1");
  await 40;
  console.log("hello world-2");
}

function fakeWithPromise() {
  return Promise.resolve(10).then(() => {
    console.log("hello world-1");
    return Promise.resolve(40).then(() => {
      console.log("hello world-2");
    });
  });
}

// fakeWithAsync().then((data) => console.log(data));
