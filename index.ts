let message: string = "Hello, TypeScript!";
console.log(message);

let temperature: number = 30;
let welcomeMessage: string = "Hello, TypeScript!";
let isLoggedIn: boolean = true;

let colors: string[] = ["red", "green", "blue"];
let userInfo : [string, number] = ["John", 25];

enum Season{
    Spring, Summer, Autumn,Winter
}
let currentSeason: Season = Season.Spring;

function logValue(value: any){
    console.log(value);
}

function noReturn():void{
    console.log("No return");
}



function greet(name: string):string{
    return `Hello , ${name}`;
}


function multiply(a: number, b: number): number{
    return a * b;
}

export {};