"use strict";

const p = new Promise((resolve, reject) => {
  console.log("Promise starting....");
  setTimeout(() => {
    console.log("Promise Finished");
    resolve("success!!");
  }, 5000);
});

const usersGet = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener("load", () => {
    console.log("httpRequest.responseText = ", httpRequest.responseText);
  });

  httpRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  httpRequest.send();
};

usersGet();
