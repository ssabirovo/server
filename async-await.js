"use strict";

// BackEnd
function getUser(userID) {
  return new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * 5000);
    console.log(`user searching in database of github.com...`);
    setTimeout(() => {
      const user = { userID, username: "arslonbekXX" }; // from backend endpoint
      console.log(`Finished ${randomTime / 1000}s`);
      resolve(user);
    }, 5000);
  });
}

function getRepos(username) {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5000);
    console.log(`repos of user searching in database of github.com...`);

    setTimeout(() => {
      const repos = ["buduar-web", "shelfi.io", "pdp-b-18"]; // from backend endpoint
      resolve(repos);
    }, randomTime);
  });
}

async function github() {
  try {
    const user = await getUser("abc123"); // { userID: "abc123", username: "arslonbekXX" }
    console.log("user = ", user);
    const repos = await getRepos(user.username);
    console.log("repos = ", repos);
  } catch (err) {
    console.log("err = ", err.message);
  }
}

github();
