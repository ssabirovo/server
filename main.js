"use strict";

const request = new XMLHttpRequest();
request.open("get", "https://jsonplaceholder.typicode.com/users");

request.send();

request.addEventListener("load", function () {
  console.log("this = ", this);
});

/**
 * CRUD
 *  C -> create (post)
 *  R -> read (get)
 *  U -> update (put, patch)
 *  D -> delete (delete)
 *
 *
 *
 *
 */
