# Day 2: JavaScript Arrays, Numbers & Math

Welcome to Day 2! This day covers JavaScript's Array object, array methods, the Number object, number methods, and the Math object for mathematical operations. All runnable code is in [Arrays.js](./Arrays.js), [Numbers.js](./Numbers.js), and [Dates.js](./Dates.js).

- [Array Object & Methods](#array-object--methods)
- [Number Object & Methods](#number-object--methods)
- [Math Object & Methods](#math-object--methods)
- [Generating Random Numbers](#generating-random-numbers)

➡️ **[Open the Day 2 Folder](../day_002/)**

---

# Number Object & Methods

JavaScript represents numbers using the `number` type. You can use primitive numbers or the `Number` object (rarely needed).

## Creating Numbers

```js
const num1 = new Number(5.94243); // Number object (not recommended for most cases)
console.log(typeof num1); // 'object'
console.log(typeof num1.toString()); // 'string'
```

## Useful Number Methods

- `.toFixed(n)`: Rounds to `n` decimal places (returns a string)
- `.toPrecision(n)`: Formats to `n` significant digits (returns a string)
- `.toLocaleString(locale)`: Formats number for a specific locale

```js
console.log(num1.toFixed(3)); // '5.942'
console.log(num1.toPrecision(1)); // '6'
console.log(num1.toLocaleString("en-IN")); // '5.942'
```

---

# Math Object & Methods

The `Math` object provides mathematical constants and functions.

## Common Math Methods

- `Math.abs(x)`: Absolute value
- `Math.sqrt(x)`: Square root
- `Math.round(x)`: Round to nearest integer
- `Math.ceil(x)`: Round up
- `Math.floor(x)`: Round down
- `Math.max(a, b, ...)`: Largest value
- `Math.min(a, b, ...)`: Smallest value
- `Math.random()`: Random number between 0 (inclusive) and 1 (exclusive)

```js
console.log(Math.abs(-22)); // 22
console.log(Math.sqrt(25)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.max(2, 3, 4, 5, 6, 7)); // 7
console.log(Math.min(2, 3, 4, 5, 6, 7)); // 2
console.log(Math.random()); // e.g., 0.123456
```

---

# Generating Random Numbers

## Random Integer Between 1 and 10

```js
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10 (inclusive)
```

## Random Integer in a Custom Range

To get a random integer between `min` and `max` (inclusive):

```js
let min = 10;
let max = 20;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // e.g., 13
```

---

# Summary Table

| Concept        | Example Code                                | Output/Description          |
| -------------- | ------------------------------------------- | --------------------------- |
| Number object  | `new Number(5.9)`                           | Number object (rarely used) |
| toFixed        | `num1.toFixed(2)`                           | '5.94'                      |
| toPrecision    | `num1.toPrecision(1)`                       | '6'                         |
| toLocaleString | `num1.toLocaleString('en-IN')`              | '5.942'                     |
| Math.abs       | `Math.abs(-5)`                              | 5                           |
| Math.sqrt      | `Math.sqrt(9)`                              | 3                           |
| Math.round     | `Math.round(4.5)`                           | 5                           |
| Math.ceil      | `Math.ceil(4.1)`                            | 5                           |
| Math.floor     | `Math.floor(4.9)`                           | 4                           |
| Math.max       | `Math.max(1,2,3)`                           | 3                           |
| Math.min       | `Math.min(1,2,3)`                           | 1                           |
| Math.random    | `Math.random()`                             | 0 <= x < 1                  |
| Random 1-10    | `Math.floor(Math.random()*10)+1`            | 1 to 10                     |
| Random range   | `Math.floor(Math.random()*(max-min+1))+min` | min to max                  |

---

See [Numbers.js](./Numbers.js) for all runnable code and more details.

---

# Date Object & Methods

JavaScript's `Date` object lets you work with dates and times. See [Dates.js](./Dates.js) for runnable code.

## Creating Dates

- `new Date()`: Current date/time
- `new Date(year, monthIndex, day, hours, minutes, seconds, ms)`: Custom date (monthIndex is 0-based)
- `new Date(dateString)`: From string

```js
let now = new Date();
let custom = new Date(2023, 0, 23, 3, 5);
let fromStr = new Date("2022-12-31T23:59:59");
```

## Formatting Dates

- `.toString()`, `.toDateString()`, `.toTimeString()`, `.toISOString()`, `.toJSON()`
- `.toLocaleString()`, `.toLocaleDateString()`, `.toLocaleTimeString()`
- Custom formatting with options

```js
console.log(
  now.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);
```

## Getting Date Components

- `.getFullYear()`, `.getMonth()`, `.getDate()`, `.getDay()`
- `.getHours()`, `.getMinutes()`, `.getSeconds()`, `.getMilliseconds()`
- `.getUTCHours()`

```js
console.log(now.getFullYear()); // e.g., 2024
console.log(now.getMonth()); // 0-11
console.log(now.getDate()); // 1-31
```

## Setting Date Components

- `.setFullYear()`, `.setMonth()`, `.setDate()`, `.setHours()`, `.setMinutes()`, `.setSeconds()`, `.setMilliseconds()`

```js
let d = new Date();
d.setFullYear(2025);
d.setMonth(11); // December
d.setDate(25);
```

## Timestamps

- `Date.now()`: Current timestamp (ms since Jan 1, 1970)
- `Date.parse(dateString)`: Parse string to timestamp

```js
let ts = Date.now();
let parsed = Date.parse("2024-06-10T12:34:56Z");
```

## Summary Table

| Concept        | Example Code                         | Output/Description     |
| -------------- | ------------------------------------ | ---------------------- |
| Current date   | `new Date()`                         | Current date/time      |
| Custom date    | `new Date(2023, 0, 23, 3, 5)`        | Jan 23, 2023, 03:05    |
| From string    | `new Date('2022-12-31T23:59:59')`    | Dec 31, 2022, 23:59:59 |
| toLocaleString | `now.toLocaleString()`               | Localized string       |
| getFullYear    | `now.getFullYear()`                  | Year (e.g., 2024)      |
| setMonth       | `d.setMonth(11)`                     | Set to December        |
| Date.now       | `Date.now()`                         | ms since epoch         |
| Date.parse     | `Date.parse('2024-06-10T12:34:56Z')` | ms since epoch         |

See [Dates.js](./Dates.js) for all runnable code and more details.

# Array Object & Methods

JavaScript arrays are used to store multiple values in a single variable. Arrays come with many useful methods for adding, removing, and manipulating elements.

## Creating Arrays

```js
// Using array literal
let arr = [2, 3, 4, "kush", true, 1, 2, 3, 4, 456, 24, 2];
console.log(arr);

// Using Array constructor
let arr1 = new Array(0, 1, 2, 3, 4, 5, 6);
console.log(arr1);
```

## Common Array Methods

```js
let myarr = [1, 3, 1, 4, 6, 4, 6, 7];

myarr.push(4); // Adds to end
myarr.pop(); // Removes last
myarr.unshift(5); // Adds to start
myarr.shift(); // Removes first
console.log(myarr.includes(3)); // true if 3 exists
console.log(myarr.indexOf(1)); // index of 1
console.log(myarr.join()); // joins to string
console.log(myarr.slice(2, 4)); // shallow copy
console.log(myarr.splice(2, 4)); // removes/adds elements

let s = ["a", "b"];
console.log(myarr.concat(s)); // merges arrays
console.log([...myarr, ...s]); // merges arrays (spread)
```

## Nested Arrays and flat

```js
let nestedArr = [
  2,
  3,
  4,
  [2, 4, 5, 43, 2, 54],
  344,
  [34234, [3444, 43324], 4353],
];
console.log(nestedArr.flat(Infinity)); // Flattens all levels
```

## Array Static Methods

```js
console.log(Array.isArray("kush")); // false
console.log(Array.isArray(arr)); // true
console.log(Array.from("kush")); // ["k", "u", "s", "h"]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
```

---

# Object Object & Methods

JavaScript objects are collections of key-value pairs. They are used to store structured data and support many useful methods for manipulation and inspection.

## Types of Object Creation in JavaScript

JavaScript supports several ways to create objects, each with its own use case:

| Type                 | How to Create                         | Example Syntax                 | Notes                                 |
| -------------------- | ------------------------------------- | ------------------------------ | ------------------------------------- |
| Singleton            | Object literal/module export          | `const obj = {}`               | Only one instance, reused everywhere  |
| Object Literal       | `{ ... }`                             | `const obj = { a: 1 }`         | Most common, simple                   |
| Object Constructor   | `new Object()`                        | `const obj = new Object()`     | Rarely used                           |
| Object.create        | `Object.create(proto)`                | `const obj = Object.create(p)` | Sets prototype                        |
| Factory Function     | Function returning object             | `function f() { return {}; }`  | Returns a new object each call        |
| Constructor Function | Function with `this`, used with `new` | `function F() { this.x = 1; }` | Use `new` to create instances         |
| Class (ES6+)         | `class` keyword                       | `class C {}`                   | Syntactic sugar for constructor+proto |

### Examples

```js
// Singleton (object literal)
const singleton = { id: 1, name: "I am unique" };

// Factory Function
function createUser(name, age) {
  return { name, age };
}
const user1 = createUser("Alice", 25);

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Charlie", 40);

// Class-based Object
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    return `I am a ${this.type}`;
  }
}
const dog = new Animal("dog");
```

- **Singleton**: Only one instance exists; used for global state or configuration.
- **Factory Function**: Returns a new object each time; flexible, no prototype chain.
- **Constructor Function**: Used with `new`, sets up prototype chain.
- **Class**: Modern, clear syntax for creating multiple similar objects with shared methods.

## Creating Objects

```js
// Object literal
const sym = Symbol("kkk");
const Jsuser = {
  [sym]: "symbol value",
  name: "kush",
  rollno: 5,
  class: "6th",
};

// Object constructor
const objA = new Object();
objA.x = 10;

// Object.create (prototype-based)
const proto = {
  greet() {
    return "Hello!";
  },
};
const objB = Object.create(proto);
objB.name = "protoObj";
```

## Property Access

```js
console.log(Jsuser.name); // Dot notation
console.log(Jsuser["name"]); // Bracket notation
console.log(Jsuser[sym]); // Symbol property
```

## Common Object Methods

```js
console.log(Jsuser.hasOwnProperty("name")); // true
console.log(Object.keys(Jsuser)); // ["name", "rollno", "class"]
console.log(Object.values(Jsuser)); // ["kush", 5, "6th"]
console.log(Object.entries(Jsuser)); // [["name", "kush"], ...]
```

## Modifying and Freezing Objects

```js
Jsuser.name = "kumar";
Object.freeze(Jsuser); // Now immutable (shallow)
Jsuser.name = "rohan"; // No effect
```

## Object.seal and Object.preventExtensions

```js
const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // Allowed
// sealedObj.b = 3; // Not allowed

const noExtObj = { x: 1 };
Object.preventExtensions(noExtObj);
noExtObj.x = 2; // Allowed
// noExtObj.y = 3; // Not allowed
```

## Adding Methods and 'this' Confusion

```js
Jsuser.print = function () {
  console.log("hello kush");
};
Jsuser.printName = function () {
  console.log(`hello user ${this.name}`);
};
Jsuser.arrowPrint = () => {
  console.log(`arrowPrint: hello user ${this.name}`);
};
// Note: Arrow functions do NOT bind 'this' to the object
```

## Optional Chaining

```js
console.log(Jsuser?.k); // undefined, no error
console.log(Jsuser?.printName?.()); // Calls if exists
```

## Merging and Copying Objects

```js
const obj1 = { 1: 1, 2: 2 };
const obj2 = { 3: 3, 4: 4 };
const obj3a = Object.assign({}, obj1, obj2); // Shallow copy
const obj3b = { ...obj1, ...obj2 }; // Spread (shallow copy)
```

## Destructuring

```js
const student = { name: "kush", class: "12th" };
const { name, class: c } = student;
```

## Other Useful Methods

```js
console.log(Object.getOwnPropertyNames(Jsuser));
```

## JSON Objects

- JSON is a string format for data, not a JS object.
- Use `JSON.parse()` to convert JSON string to object, `JSON.stringify()` to convert object to JSON string.

```js
const jsonString = '{ "name": "kush", "fees": "200", "class": "12th" }';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
```

## Confusing Points Explained

- **Object.freeze vs Object.seal vs Object.preventExtensions**:
  - `freeze`: cannot add/remove/modify properties (shallow)
  - `seal`: cannot add/remove, but can modify existing
  - `preventExtensions`: cannot add, can remove/modify
- **Symbol**: unique property keys, not accessible via normal Object.keys
- **Arrow functions** do NOT bind 'this' to the object
- **Shallow vs Deep copy**: assign/spread only copy top-level properties
- **JSON** is not a JS object, but a string format for data

## Sample JSON API Response (for reference)

```json
{
  "links": { "self": "http://example.com/articles" },
  "data": [
    {
      "type": "articles",
      "id": "1",
      "attributes": { "title": "JSON:API paints my bikeshed!" }
    }
  ],
  "included": [
    { "type": "people", "id": "9", "attributes": { "firstName": "Dan" } }
  ]
}
```

---

# Function Object & Methods

JavaScript functions are reusable blocks of code that perform specific tasks. They support many forms and features for flexibility and power.

## Types of Functions in JavaScript

| Type                  | Syntax Example                          | Notes                             |
| --------------------- | --------------------------------------- | --------------------------------- |
| Function Declaration  | `function foo() {}`                     | Hoisted, named, most common       |
| Function Expression   | `const f = function() {}`               | Not hoisted, can be anonymous     |
| Arrow Function (ES6+) | `const f = () => {}`                    | No own `this`, concise            |
| IIFE                  | `(function() {})();`                    | Runs immediately                  |
| Callback              | `setTimeout(function(){}, 1000)`        | Passed as argument                |
| Higher-Order Function | `function f(g) { return function(){} }` | Takes/returns function            |
| Function Constructor  | `new Function('a','b','return a+b;')`   | Rarely used, dynamic code         |
| Default Parameters    | `function f(x=1) {}`                    | Sets default if not provided      |
| Rest Parameters       | `function f(...args) {}`                | Collects all arguments into array |

## Examples

```js
// Function Declaration
function print() {
  console.log("hello world");
}
print();

// Function Expression
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(2, 3));

// Arrow Function
const square = (n) => n * n;
console.log(square(5));

// Default Parameters
function greet(name = "user") {
  console.log(`hello ! ${name}`);
}
greet();
greet("kush");

// Rest Parameters
function printArgs(...args) {
  args.forEach((e) => console.log(e));
}
printArgs(1, 2, 3);

// IIFE
(function () {
  console.log("IIFE executed!");
})();

// Callback
function processUserInput(callback) {
  callback("CallbackUser");
}
processUserInput(function (name) {
  console.log("Hello, " + name);
});

// Higher-Order Function
function makeMultiplier(factor) {
  return (x) => x * factor;
}
const double = makeMultiplier(2);
console.log(double(8));

// Function Constructor
const sum = new Function("a", "b", "return a + b;");
console.log(sum(3, 4));
```

## Confusing Points Explained

- **Rest vs Spread**: `...args` in function parameters collects arguments into an array (rest). `...` in calls/arrays/objects spreads values out (spread).
- **Function Hoisting**: Declarations are hoisted (usable before definition), expressions/arrow functions are not.
- **Arrow Functions**: Do NOT have their own `this`, `arguments`, or `super`.
- **IIFE**: Immediately Invoked Function Expression runs as soon as it is defined.
- **Callback**: A function passed as an argument to another function.
- **Higher-Order Function**: A function that takes or returns another function.
