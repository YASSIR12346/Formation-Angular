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

function updatePerson(person: Person, update: Person):Person {
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

interface Circle{
    readonly CenterX: number;
    readonly CenterY: number;
    readonly radius: number;
}

function moveCircle(circle:Circle){
    circle={CenterX:10,CenterY:10,radius:100};
}

export { };