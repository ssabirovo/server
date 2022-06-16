"use strict";

const myName = "Arslonbek";

function first() {
  const age = 21;

  function second() {
    const job = "Teacher";

    console.log(`${myName} is a ${age}-old ${job}`);
  }

  second();
}

first();
