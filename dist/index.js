"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello, TypeScript!";
console.log(message);
let temperature = 30;
let welcomeMessage = "Hello, TypeScript!";
let isLoggedIn = true;
let colors = ["red", "green", "blue"];
let userInfo = ["John", 25];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
let currentSeason = Season.Spring;
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("No return");
}
function greet(name) {
    return `Hello , ${name}`;
}
function multiply(a, b) {
    return a * b;
}
function createEmail(to, subject) {
    if (subject) {
        return `Email to ${to} about ${subject}`;
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
function concatenateString(...values) {
    let result = "";
    for (let value of values) {
        result += value;
    }
    return result;
}
function maxNumber(...values) {
    let result = values[0];
    for (let value of values) {
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
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters = 0) {
        console.log(`the dog ${this.name} moved ${distanceInMeters}m.`);
    }
}
let dog = new Dog("Tommy");
dog.move(10);
class Person {
    constructor(name) { this.name = name; }
    getName() {
        return this.name;
    }
}
let person = new Person("John");
//person.name // Error: 'name' is private;
person.getName(); // OK
//Generics 
function identity(arg) {
    console.log(`Type of arg: ${typeof arg}`);
    return arg;
}
let outputString = identity("myString");
let outputNumber = identity(100);
let outputBoolean = identity(true);
class Generic {
    fun(arg) {
        return arg;
    }
}
//enums
var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function enumResponse(value) {
    if (value === Response.Yes) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function TestResult(result) {
    if (result) {
        return Message.Success;
    }
    else {
        return Message.Failure;
    }
}
console.log(TestResult(true));
function padLeft(value, padding) {
    // function body
}
function testCustomer(customer) {
    console.log(customer.name);
    console.log(customer.credit);
    console.log(customer.email);
    console.log(customer.phone);
}
function logged(constructor) {
    console.log(`New instance created.`);
}
let Decorator = class Decorator {
    constructor(name) {
        this.name = name;
    }
};
Decorator = __decorate([
    logged,
    __metadata("design:paramtypes", [String])
], Decorator);
const myInstance = new Decorator("Tested Example");
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "Delete inactive users",
    description: "..."
};
//# sourceMappingURL=index.js.map