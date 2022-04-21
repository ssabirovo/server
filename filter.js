const numbers = [1, 15, 13, 12, 22, 45, 36, 30, 10, 20];

/**
 *
 * @param {number[]} nums
 * @returns {
    fizz: [12, 36],
    buzz: [10, 20],
    fizzBuzz: [15, 45, 30],
    others: [1, 13, 22],
  };
 */
function fizzBuzz(nums = []) {
  const fizz = nums.filter(function (num) {
    return num % 3 === 0 && num % 5 !== 0;
  });

  const buzz = nums.filter(function (num) {
    return num % 3 !== 0 && num % 5 === 0;
  });

  const fizzBuzz = nums.filter(function (num) {
    return num % 3 === 0 && num % 5 === 0;
  });

  const others = nums.filter(function (num) {
    return num % 3 !== 0 && num % 5 !== 0;
  });

  return {
    fizz,
    buzz,
    fizzBuzz,
    others,
  };
}

const result = fizzBuzz(numbers);
console.log(result);
