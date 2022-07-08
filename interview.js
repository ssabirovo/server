"use strict";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {}

process([1, 2, 3, 4, 5, 6]);

// ...... starting .....
// 1 -> 2s (2s delay)
// 2 -> 4s (2s delay)
// 3 -> 6s (2s delay)
