"use strict";

function foo() {
  throw new Error("Error 😢");
}

function bar() {
  foo();
}

function baz() {
  bar();
}

baz();
