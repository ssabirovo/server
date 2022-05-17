"use strict";
const elements = document.querySelectorAll(".app, .test");

elements.forEach((el, idx) => (el.innerHTML = `idx = ${idx}`));
