// ======================= call stack =========================
// The call stack is how JavaScript keeps track of function calls.
// Each time a function is called, a new frame is added to the stack.
// When a function returns, its frame is removed.

function first() {
  console.log("Inside first()");
  second();
  console.log("Back in first()");
}

function second() {
  console.log("Inside second()");
  third();
}

function third() {
  console.log("Inside third()");
}

console.log("Start");
first();
console.log("End");
// Call stack flow:
// Start
// Inside first()
// Inside second()
// Inside third()
// Back in first()
// End

// ================= control flow ====================

// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

// if...else
let score = 45;
if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// if...else if...else
let temp = 30;
if (temp > 35) {
  console.log("It's hot");
} else if (temp > 20) {
  console.log("It's warm");
} else {
  console.log("It's cold");
}

// short-hand (ternary operator)
let isMember = true;
let price = isMember ? 10 : 20;
console.log("Price:", price); // 10 if true, 20 if false

// comparison operators
console.log(5 > 3); // true
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != 4); // true
console.log(5 !== "5"); // true

// falsy values in JS:
// false, 0, '', null, undefined, NaN, 0n (BigInt zero)
let falsyValues = [false, 0, "", null, undefined, NaN, 0n];
falsyValues.forEach((val) => {
  if (!val) console.log(val, "is falsy");
});

// truthy values in JS:
// '0', 'false', ' ', [], {}, function(){}
let truthyValues = ["0", "false", " ", [], {}, function () {}];
truthyValues.forEach((val) => {
  if (val) console.log(val, "is truthy");
});

// switch statement
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("Unknown fruit");
}

// nullish coalescing operator (??)
let userInput = null;
let defaultValue = "Guest";
let name = userInput ?? defaultValue;
console.log("Hello,", name); // Hello, Guest

// Note: ?? only checks for null or undefined, not other falsy values like '' or 0.
let emptyString = "";
console.log(emptyString ?? "Default"); // '' (empty string, not null/undefined)
