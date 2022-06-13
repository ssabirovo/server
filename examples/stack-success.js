"use strict";

function multiply(a, b) {
  throw new Error("My Error");
  return a * b;
}

function pow2(n) {
  return multiply(n, n);
}

function printValues(n) {
  setTimeout(() => {
    console.log("settimeout callback");
  }, 5000);
  const powered2 = pow2(n);
  console.log(`powered2 = ${powered2}`);
}

printValues(4);

/**
 *  CALL STACK
 *
 *
 */
