// JavaScript Operators: Examples and Usage

// --- Arithmetic Operators ---
let a = 10,
  b = 3;
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1  (Modulus)
console.log(a ** b); // 1000 (Exponentiation)

// --- Assignment Operators ---
let x = 5;
x += 2; // x = x + 2
console.log(x); // 7
x -= 1; // x = x - 1
console.log(x); // 6
x *= 3; // x = x * 3
console.log(x); // 18
x /= 2; // x = x / 2
console.log(x); // 9
x %= 4; // x = x % 4
console.log(x); // 1
x **= 3; // x = x ** 3
console.log(x); // 1

// --- Comparison Operators ---
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(3 <= 2); // false

// --- Logical Operators ---
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// --- Bitwise Operators ---
console.log(5 & 1); // 1 (AND)
console.log(5 | 1); // 5 (OR)
console.log(5 ^ 1); // 4 (XOR)
console.log(~5); // -6 (NOT)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2 (right shift)
console.log(-5 >>> 1); // 2147483645 (unsigned right shift)

// --- String Operators ---
console.log("Hello" + " " + "World"); // 'Hello World' (concatenation)
let s = "Hi";
s += "!";
console.log(s); // 'Hi!'

// --- Conditional (Ternary) Operator ---
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // 'Yes'

// --- typeof Operator ---
console.log(typeof 123); // 'number'
console.log(typeof "abc"); // 'string'
console.log(typeof {}); // 'object'
console.log(typeof undefined); // 'undefined'

// --- instanceof Operator ---
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true

// --- delete Operator ---
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

// --- in Operator ---
console.log("b" in obj); // true
console.log("a" in obj); // false

// --- Spread and Rest Operators ---
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
