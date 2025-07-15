// JavaScript Data Types: Primitive and Non-Primitive

// --- PRIMITIVE DATA TYPES ---
// 1. String
let str = "Hello, World!";
const greeting = "Hi!";
console.log(typeof str); // "string"

// 2. Number
let num = 42;
const pi = 3.14;
console.log(typeof num); // "number"

// 3. Boolean
let isActive = true;
const isDone = false;
console.log(typeof isActive); // "boolean"

// 4. Null
let empty = null;
console.log(typeof empty); // "object" (this is a quirk in JS)

// 5. Undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// 6. Symbol
const sym = Symbol("id");
console.log(typeof sym); // "symbol"

// 7. BigInt
const big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

// --- NON-PRIMITIVE DATA TYPES ---
// 1. Object
let person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"

// 2. Array (a type of object)
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"

// 3. Function (also an object)
function sayHello() {
  return "Hello!";
}
console.log(typeof sayHello); // "function"

// --- let, const, var with Data Types ---
// let: Block-scoped, can reassign
let a = 10;
a = "Now a string"; // Allowed

// const: Block-scoped, cannot reassign (but objects/arrays can be mutated)
const b = [1, 2, 3];
b.push(4); // Allowed (mutating the array)
// b = [5, 6]; // Error: Assignment to constant variable

const obj = { x: 1 };
obj.x = 2; // Allowed (mutating the object)
// obj = {}; // Error

// var: Function-scoped, can reassign and redeclare (avoid using var)
var c = 5;
c = 6; // Allowed
var c = "Redefined"; // Allowed (can cause bugs)

// --- Why avoid var? ---
// - var is function-scoped, not block-scoped, which can lead to unexpected behavior
// - Allows redeclaration, which can cause bugs
// - let and const are more predictable and safer

if (true) {
  var x = 100;
  let y = 200;
  const z = 300;
}
console.log(x); // 100 (var leaks out of block)
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined


// null - also is object  but undefined is undefined type;;


// --- Summary ---
// Primitives: string, number, boolean, null, undefined, symbol, bigint
// Non-primitives: object, array, function
// Use let and const for variable declarations. Prefer const by default, use let if reassignment is needed. Avoid var.

