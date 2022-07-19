"use strict";
var User = /** @class */ (function () {
    function User(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    User.prototype.run = function () {
        console.log("".concat(this.name, " is running..."));
    };
    User.prototype.jump = function () {
        console.log("".concat(this.name, " is jumping..."));
    };
    User.prototype.changeName = function (name) {
        this.name = name;
    };
    return User;
}());
var user1 = new User("Arslonbek", 21, "Teacher");
var user2 = new User("Jamshidbek", 26, "Casher");
user1.run();
user1.__proto__.run();
