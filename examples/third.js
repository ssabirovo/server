"use strict";

const myName = "Arslonbek";

function first() {
  const age = 21;
  if (age >= 20) {
    const isBig = 3;
    var isAccess = true;
  }

  function second() {
    const job = "Teacher";

    console.log(`${myName} is a ${age}-old ${job}`);
  }

  second();
}

first();
