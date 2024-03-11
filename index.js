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
