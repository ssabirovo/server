"use strict";

function multiply(a, b) {
  return a * b;
}

function pow2(n) {
  return multiply(n, n);
}

function printValues(n) {
  const powered2 = pow2(n);
  console.log(powered2);
}

printValues(4);
