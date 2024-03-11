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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
var stringUtils_1 = require("./stringUtils");
var capitalized = (0, stringUtils_1.capitalize)("hello, TypeScript!");
console.log(capitalized);
function logged(constructor) {
    console.log("New instance created.");
}
var Decorator = function () {
    var _classDecorators = [logged];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Decorator = _classThis = /** @class */ (function () {
        function Decorator_1(name) {
            this.name = name;
        }
        return Decorator_1;
    }());
    __setFunctionName(_classThis, "Decorator");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Decorator = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Decorator = _classThis;
}();
var myInstance = new Decorator("Tested Example");
