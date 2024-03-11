"use strict";
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
