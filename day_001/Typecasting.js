// JavaScript Type Casting (Type Conversion) Examples

// --- Implicit Type Conversion (Coercion) ---
console.log("5" + 2); // '52' (number 2 is coerced to string)
console.log("5" - 2); // 3   (string '5' is coerced to number)
console.log("5" * "2"); // 10 (both strings coerced to numbers)
console.log(true + 1); // 2   (true is coerced to 1)
console.log(false + "1"); // 'false1' (false is coerced to string)
console.log(null + 1); // 1   (null is coerced to 0)
console.log(undefined + 1); // NaN (undefined is not a number)

// --- Explicit Type Conversion ---
// To Number
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// To String
console.log(String(123)); // '123'
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log((123).toString()); // '123'

// To Boolean
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)

// --- Object and Array Conversion ---
console.log([1, 2, 3] + 4); // '1,2,34' (array to string, then concatenated)
console.log({} + 1); // '[object Object]1' (object to string, then concatenated)
console.log([] == false); // true (empty array is coerced to false)
console.log("" == false); // true (empty string is coerced to false)
console.log(null == undefined); // true (special case)

// --- What is NOT allowed or gives unexpected results ---
// Number to object: Not automatic, but can use Object(123)
console.log(typeof Object(123)); // 'object'
// Direct conversion of object to number (unless valueOf/toString is defined)
console.log(Number({})); // NaN
console.log(Number([])); // 0 (empty array to number is 0)
console.log(Number([1, 2, 3])); // NaN (array with more than one element)

// --- Edge Cases ---
console.log(parseInt("08")); // 8
console.log(parseInt("abc")); // NaN
console.log(parseFloat("3.14abc")); // 3.14

// --- Type Conversion Priority in Binary Operations (a operator b) ---
// In JavaScript, the type of the operands and the operator determine how type conversion happens:
// 1. The + operator: If either operand is a string, both are converted to strings (concatenation).
console.log("5" + 2); // '52' (number 2 is converted to string)
console.log(2 + "5"); // '25' (number 2 is converted to string)
// 2. Arithmetic operators (-, *, /, %, **): Both operands are converted to numbers.
console.log("5" - 2); // 3 (string '5' is converted to number)
console.log("10" * "2"); // 20 (both strings converted to numbers)
// 3. Comparison operators (==, !=): Type coercion may occur to compare values.
console.log("5" == 5); // true (string '5' converted to number 5)
console.log(false == 0); // true (false converted to 0)
// 4. Strict comparison (===, !==): No type conversion, both type and value must match.
console.log("5" === 5); // false
// 5. Boolean context (if, while, ||, &&): Values are converted to boolean.
if ("hello") {
  console.log("Non-empty string is truthy");
}
if (0) {
  console.log("This will not print");
}

// --- Summary ---
// Implicit conversion happens in expressions (e.g., +, -, *, /, ==)
// Explicit conversion uses Number(), String(), Boolean(), etc.
// Not all conversions are intuitive; always check the result!
// + operator: If either operand is a string, result is string (string conversion wins)
// -, *, /, %, **: Both operands converted to number
// ==, !=: Type coercion may occur (see rules above)
// ===, !==: No type conversion
// Boolean context: Value converted to boolean
