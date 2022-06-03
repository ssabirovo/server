"use strict";
let job = "Teacher";
job = "Developer";

let myJob = job;

/**
 * Primitive types : string, number, boolean, null, undefined
 * ---------STACK---------
 * address    |   name    |      value
 * -----------------------------------
 * 002       |    myJob   |     "Developer"
 * 001       |    job     |     "Developer"
 * 001       |    job     |     "Teacher"
 *
 *
 */

// const person = {
//   age: 20,
//   firstName: "arslonbek",
//   address: {
//     city: "Tashkent",
//   },
// };

// const p = { ...person };
// p.age = 30;
// p.address.city = "Urgench";

// console.log("person = ", person);
// console.log("p = ", p);

// /**
//  * ---------MAIN STACK---------
//  * address    |   name    |      value
//  * ------------------------------------------
//  * 002       |   p        |      MAIN-HEAP["0002"]
//  * 001       |   person  |      MAIN-HEAP["0001"]
//  *
//  *
//  */

// /**
//  * --------- MAIN HEAP ---------
//  * address    |  value
//  * ------------------------------------------------------------------
//  * 0001       |  add |    name    | value  (stack)
//  *               103 |   address  |   heap1["1001"]
//  *               102 | firstName  |   "arslonbek"
//  *               101 |    age     |   20
//  *  ----------------------------------------------------------------
//  * 0002       |  add |    name          |      value  (stack)
//  *               103 |   address  |   heap1["1001"]
//  *               102 |    firstName     |   "arslonbek"
//  *               101 |    age           |       30
//  *
//  */

// /**
//  *--------- heap1 ---------
//  * address    |  value
//  * -----------------------
//  * 1001       |  add |    name    | value  (stack2)
//  * ---------------------------------
//  *               202 |   city  |   "Tashkent"
//  */

function fake(obj = {}) {
  obj.age = 20;
  return obj;
}

const person = {
  firstName: "arslonbek",
};

const p = { ...fake({ ...person }) };

console.log("person = ", person); // {}
console.log("p = ", p); //           {}
console.log(p === person); // false

/**
 * MAIN-STACK
 *  address |   name     |   value
 * --------------------------------
 *    002   |    p       |   MH(0001)
 *    001   |    person  |   MH(0001)
 */

/**
 * MAIN-HEAP
 * address        |        value
 *-----------------------------------
 *   0001         |  address |   name         |       value
 *                    102    |    age         |        20
 *                    101    |    firstName   |    "arslonbek"
 *
 * --------------------------------
 *
 */
