// Basic type

// String
const language: string = 'Typescript';
const message: string = `I'm programing in ${language}`;

// boolean
const hasErrors: boolean = true;
const isValid: boolean = false;

// number
const pi:number = 3.14159;
const year: number = 2021;

//bigint
const bigNumber: bigint = 9007199254740993n;

// Symbol
const mySymbol: symbol = Symbol('unique-symbol-value');

// ARRAY
// const primeNumbers: number[] = [2, 3, 5, 7, 11];
// or 
const primeNumbers: Array<number> = [2, 3, 5, 7, 11];
const myArray: number[] = []; //any
// myArray.push('some-text');// error

// Tuples
const position: [number, number] = [1,2];
// const positionOrder: [number, number] = [1,2,3]; //error

//any
let thisCanbBeAnything: any = 12345;
thisCanbBeAnything = "I can be anything! Dont worry!";

// thisCanbBeAnything = [" Now i'am array"];
// console.log(thisCanbBeAnything);

// unknow - does not compare to other type
let code: unknown;
code = 35;
code = [12345];
code = {};

// vold
function doSomeThing() {};
const resultOfVoidFunction: void = doSomeThing();

// null & undefined
const someNullField: null = null;
const someNullField2: undefined = undefined;

// never
if (typeof year !== "number") {
    year;
}

// Object

const programingLanguage: object = {
    name: "TypeScript"
};