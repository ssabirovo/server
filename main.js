"use strict";
const items = ["🍅", "🍄", "🥦", "🥕", "🥒", "🌽", "🥑"];
// //         0  1  2  3  4  5  6
// // nums = [1, 4, 2, 1, 4, 1, 4];

// /**
//  * i = 0 -> tmp = 6; span  = 6;
//  * i = 1 -> tmp = 6; span  = 6;
//  * i = 2 -> tmp = 1; span  = 6;
//  * i = 3 -> tmp = 3; span  = 6;
//  * i = 4 -> tmp = 3; span  = 6;
//  * i = 5 -> tmp = 1; span  = 6;
//  * i = 6 -> tmp = 1; span  = 6;
//  *
//  */
// function maxSpan(nums = []) {
//   let span = 0;
//   let tmp = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     const lastIdx = nums.lastIndexOf(current);
//     tmp = lastIdx - i + 1;
//     span = Math.max(tmp, span);
//   }
//   return span;
// }

// maxSpan([1, 4, 2, 1, 4, 1, 4]);

/**
 * squareUp(3) → 0,0,1,0,2,1,3,2,1
 */
function squareUp(n) {
  let temp = [];

  for (let i = 1; i <= n; i++) {
    let span = Array(n).fill(0); // []
    let count = 1;

    for (let j = n - 1; j >= n - i; j--) {
      span[j] = count++;
    }

    temp = temp.concat(span);
  }
  return temp;
}

/**
 * n = 3;
 * i = 1 -> span = [0,0,0], count = 1, temp = []
 *   ✅ j = 2 -> span = [0,0,1] count = 2;
 *   🏆 span = [0,0,1]; count = 2; temp = [0,0,1]
 * -----
 * i = 2 -> span = [0,0,0], count = 1, temp = [0,0,1]
 *   ✅ j = 2 -> span = [0,0,1] count = 2;
 *   ✅ j = 1 -> span = [0,2,1] count = 3;
 *   🏆 span = [0,2,1]; count = 3; temp = [0,0,1,0,2,1]
 * -----
 * i = 3 -> span = [0,0,0], count = 1, temp = [0,0,1,0,2,1]
 *   ✅ j = 2 -> span = [0,0,1] count = 2;
 *   ✅ j = 1 -> span = [0,2,1] count = 3;
 *   ✅ j = 0 -> span = [3,2,1] count = 4;
 *   🏆 span = [3,2,1]; count = 4; temp = [0,0,1,0,2,1,3,2,1]
 */

function bunnyEars(bunnies) {
  let sum = 0;
  if (bunnies === 0) return sum;

  sum = 2 + bunnyEars(bunnies - 1);
  return sum;
}
