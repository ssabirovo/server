const user = {}; // new Object()
console.log(user);
/**
 * user.__proto__ = Object.prototype
 */

const _user = Object.create(null);
console.log(_user);
/**
 * _user.__proto__ = Object.prototype
 */

console.log(user.__proto__ === _user.__proto__);
