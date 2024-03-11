"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello, TypeScript!";
console.log(message);
var temperature = 30;
var welcomeMessage = "Hello, TypeScript!";
var isLoggedIn = true;
var colors = ["red", "green", "blue"];
var userInfo = ["John", 25];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
var currentSeason = Season.Spring;
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("No return");
}
function greet(name) {
    return "Hello , ".concat(name);
}
function multiply(a, b) {
    return a * b;
}
function createEmail(to, subject) {
    if (subject) {
        return "Email to ".concat(to, " about ").concat(subject);
    }
    return "No Subject";
}
function add(x, y, z) {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
function concatenateString() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var result = "";
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        result += value;
    }
    return result;
}
function maxNumber() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var result = values[0];
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        if (value > result) {
            result = value;
        }
    }
    return result;
}
function createVehicle(vehicle) {
    return vehicle;
}
function updatePerson(person, update) {
    person.firstName = update.firstName;
    person.lastName = update.lastName;
    if (person.age && update.age) {
        person.age = update.age;
    }
    if (person.email && update.email) {
        person.email = update.email;
    }
    return person;
}
function moveCircle(circle) {
    circle = { CenterX: 10, CenterY: 10, radius: 100 };
}
// classes
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("the dog ".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Dog;
}(Animal));
var dog = new Dog("Tommy");
dog.move(10);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("John");
//person.name // Error: 'name' is private;
person.getName(); // OK
//Generics 
function identity(arg) {
    console.log("Type of arg: ".concat(typeof arg));
    return arg;
}
var outputString = identity("myString");
var outputNumber = identity(100);
var outputBoolean = identity(true);
var Generic = /** @class */ (function () {
    function Generic() {
    }
    Generic.prototype.fun = function (arg) {
        return arg;
    };
    return Generic;
}());
