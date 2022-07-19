var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, phone, age) {
        this.name = name;
        this.phone = phone;
        this.age = age;
    }
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " is eating..."));
    };
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping..."));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, phone, age, salary, group) {
        var _this = _super.call(this, name, phone, age) || this;
        _this.salary = salary;
        _this.group = group;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying..."));
    };
    return Student;
}(Person));
var student = new Student("Arslonbek", "+998998961348", 21, 50, 510);
// @ts-ignore
console.log(student.__proto__ === Student.prototype);
console.log(typeof Student.prototype);
// @ts-ignore
console.log(student.__proto__.prototype);
