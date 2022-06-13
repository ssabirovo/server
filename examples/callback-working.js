"use strict";

function main() {
  console.log("Foo");

  setTimeout(function callback() {
    console.log("Bar");
  }, 5000);

  console.log("PDP-B-18");
}

main();
