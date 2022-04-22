"use strict";
const items = ["🍅", "🍄", "🥦", "🥕", "🥒", "🌽", "🥑"];

function fix45(nums) {
  let indexesOf4 = [];
  let indexesOf5 = [];

  nums.forEach(function (num, idx) {
    if (num === 4) indexesOf4.push(idx);
    if (num === 5) indexesOf5.push(idx);
  });
  console.log("indexesOf4 = ", indexesOf4);
  console.log("indexesOf5 = ", indexesOf5);

  indexesOf4.forEach(function (num, idx) {
    if (nums[num + 1] !== 5) {
      nums[0] = nums[num + 1];
      nums[num + 1] = 5;
    }
  });
  return nums;
}
console.log([5, 4, 5, 4, 1]);
console.log(fix45([5, 4, 5, 4, 1]));

/**
 *
 * fix45([5, 4, 5, 4, 1]) → 1,4,5,4,5
 */
