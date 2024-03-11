let message: string = "Hello, TypeScript!";
console.log(message);

let temperature: number = 30;
let welcomeMessage: string = "Hello, TypeScript!";
let isLoggedIn: boolean = true;

let colors: string[] = ["red", "green", "blue"];
let userInfo: [string, number] = ["John", 25];

enum Season {
    Spring, Summer, Autumn, Winter
}
let currentSeason: Season = Season.Spring;

function logValue(value: any) {
    console.log(value);
}

function noReturn(): void {
    console.log("No return");
}



function greet(name: string): string {
    return `Hello , ${name}`;
}


function multiply(a: number, b: number): number {
    return a * b;
}

function createEmail(to: string, subject?: string) {
    if (subject) {
        return `Email to ${to} about ${subject}`;
    }
    return "No Subject";
}


function add(x: number, y: number, z?: number): number {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
}


function concatenateString(...values: string[]): string {
    let result = "";
    for (let value of values) {
        result += value;
    }
    return result;
}


function maxNumber(...values: number[]): number {
    let result = values[0];
    for (let value of values) {
        if (value > result) {
            result = value;
        }
    }
    return result;
}

//interfaces

interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicle: Vehicle) {
    return vehicle;
}


interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

interface Person {
    email?: string;
}

function updatePerson(person: Person, update: Person): Person {
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

interface Circle {
    readonly CenterX: number;
    readonly CenterY: number;
    readonly radius: number;
}

function moveCircle(circle: Circle) {
    circle = { CenterX: 10, CenterY: 10, radius: 100 };
}

// classes

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


class Dog extends Animal {
    move(distanceInMeters: number = 0) {
        console.log(`the dog ${this.name} moved ${distanceInMeters}m.`);
    }
}

let dog = new Dog("Tommy");
dog.move(10);


class Person {
    private name: string;
    constructor(name: string) { this.name = name; }

    public getName(): string {
        return this.name;
    }
}
let person = new Person("John");
//person.name // Error: 'name' is private;
person.getName(); // OK


//Generics 

function identity<T>(arg: T): T {
    console.log(`Type of arg: ${typeof arg}`);
    return arg;
}

let outputString = identity("myString");
let outputNumber = identity(100);
let outputBoolean = identity(true);




interface GenericIdentityFn<T> {
    fun(arg: T): T;
}

class Generic<T> implements GenericIdentityFn<T>{
    fun(arg: T): T {
        return arg;
    }
}

interface GenericArray<T> {
    items: T[];
}

//enums

enum Response {
    No = 0,
    Yes = 1
}

function enumResponse(value: Response) {
    if (value === Response.Yes) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function TestResult(result: boolean): Message {
    if (result) {
        return Message.Success;
    }
    else {
        return Message.Failure;
    }
}

console.log(TestResult(true));



function padLeft(value: string, padding: string | number) {
    // function body
}


interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

function testCustomer(customer: Customer) {
    console.log(customer.name);
    console.log(customer.credit);
    console.log(customer.email);
    console.log(customer.phone);
}
import { capitalize } from './stringUtils';

let capitalized = capitalize("hello, TypeScript!");

console.log(capitalized);

import greeting, { goodbye } from './greeter';

function logged(constructor: Function) {
    console.log(`New instance created.`);
}


@logged
class Decorator {
    constructor(public name: string) { }
}

const myInstance = new Decorator("Tested Example");





export { }