// ===================== Number Object & Methods =====================

// Creating a Number object (not recommended for most cases)
const num1 = new Number(5.94243); // Usually, use primitive numbers (e.g., let x = 5)
console.log("Type of num1:", typeof num1); // 'object' (Number object)
console.log("Type of num1.toString():", typeof num1.toString()); // 'string'

// toFixed(n): Rounds the number to 'n' decimal places (returns a string)
console.log("num1.toFixed(3):", num1.toFixed(3)); // '5.942'

// toPrecision(n): Formats number to 'n' significant digits (returns a string)
console.log("num1.toPrecision(1):", num1.toPrecision(1)); // '6'

// toLocaleString(locale): Formats number according to locale (e.g., Indian format)
console.log("num1.toLocaleString('en-IN')):", num1.toLocaleString("en-IN")); // '5.942'

// ===================== Math Object & Methods =====================

// Math is a built-in object with properties and methods for mathematical constants and functions
console.log("Math object:", Math); // Shows all Math methods and properties

// Absolute value
console.log("Math.abs(-22):", Math.abs(-22)); // 22

// Square root
console.log("Math.sqrt(25):", Math.sqrt(25)); // 5

// Rounding methods
console.log("Math.round(4.5):", Math.round(4.5)); // 5 (nearest integer)
console.log("Math.ceil(4.5):", Math.ceil(4.5)); // 5 (round up)
console.log("Math.floor(4.5):", Math.floor(4.5)); // 4 (round down)

// Max and Min
console.log("Math.max(2, 3, 4, 5, 6, 7):", Math.max(2, 3, 4, 5, 6, 7)); // 7
console.log("Math.min(2, 3, 4, 5, 6, 7):", Math.min(2, 3, 4, 5, 6, 7)); // 2

// Random number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// Random integer between 1 and 10 (inclusive)
console.log("Random integer (1-10):", Math.floor(Math.random() * 10) + 1);

// ===================== Random Number in a Range =====================

// Generate a random integer between min and max (inclusive)
let min = 10;
let max = 20;
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random integer between ${min} and ${max}:`, randomInRange);
