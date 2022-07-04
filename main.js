"use strict";

function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}

outer()