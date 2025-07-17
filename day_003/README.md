# Day 3: JavaScript Scope & Hoisting

---

## 📂 Quick Access: JavaScript Example Files

- [Scope.js](./Scope.js) — Scope & Hoisting examples
- [Arrow_function.js](./Arrow_function.js) — Arrow functions & 'this'
- [Control_flow.js](./Control_flow.js) — Call stack & control flow
- [Loops.js](./Loops.js) — All basic loop types
- [Maps.js](./Maps.js) — Map class usage
- [Object_specific_loops.js](./Object_specific_loops.js) — forEach, for...of, for...in with arrays, objects, Map, string
- [Arrays_specific_loops.js](./Arrays_specific_loops.js) — High order array functions: forEach, map, filter, reduce, chaining

---

Welcome to Day 3! This day covers one of the most important JavaScript fundamentals: **scope** and **hoisting**. All runnable code is in [Scope.js](./Scope.js).

- [Scope & Hoisting: Concepts and Examples](#scope--hoisting-concepts-and-examples) ([Scope.js](./Scope.js))

➡️ **[Open the Day 3 Folder](../day_003/)**

---

# Scope & Hoisting: Concepts and Examples

JavaScript scope determines where variables and functions are accessible. Hoisting is JavaScript's behavior of moving declarations to the top of their scope.

## What is Scope?

- **Scope** is the context in which variables and functions are visible and accessible.
- There are several types of scope in JavaScript:
  - **Global Scope**: Variables declared outside any function/block are global.
  - **Function Scope**: Variables declared with `var` inside a function are local to that function.
  - **Block Scope**: Variables declared with `let` or `const` inside `{}` are only accessible within that block.
  - **Lexical Scope**: Inner functions have access to variables of their parent functions.

## Hoisting

- **Hoisting** moves variable and function declarations to the top of their scope at runtime.
- Only declarations are hoisted, not initializations.
- `var` is hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but not initialized (temporal dead zone).
- Function declarations are hoisted; function expressions are not.

## Examples

```js
// var is hoisted (initialized as undefined)
console.log(a); // undefined
var a = 4;
console.log(a); // 4

// let/const are block-scoped and not accessible before declaration
// console.log(k); // ReferenceError
{
  let k = 0;
  const c = 10;
  console.log(k, c); // 0 10
}
// console.log(k); // ReferenceError
// console.log(c); // ReferenceError

// var leaks out of blocks
{
  var s = 5;
}
console.log(s); // 5

// Lexical scope
function outer() {
  const outerVar = "I'm outer!";
  function inner() {
    console.log(outerVar); // inner can access outer's variables
  }
  inner();
}
outer();

// Function declaration vs expression
console.log(addOne(3)); // 4
function addOne(a) {
  return a + 1;
}
// console.log(addTwo(2)); // TypeError
const addTwo = function (a) {
  return a + 2;
};
console.log(addTwo(2)); // 4
```

See [Scope.js](./Scope.js) for runnable code and more detailed comments.

---

## Summary Table

| Keyword | Scope           | Hoisted | Mutable | Redeclarable |
| ------- | --------------- | ------- | ------- | ------------ |
| var     | function/global | Yes     | Yes     | Yes          |
| let     | block           | No      | Yes     | No           |
| const   | block           | No      | No      | No           |

---

## Confusing Points Explained

- `var` is function-scoped, not block-scoped (leaks out of blocks)
- `let`/`const` are block-scoped (only accessible within `{}`)
- Hoisting moves declarations, but not initializations
- Function declarations are hoisted, function expressions are not
- Lexical scope: inner functions can access variables from their parent scope
- Temporal Dead Zone: `let`/`const` cannot be accessed before declaration

---

## Best Practices

- Always declare variables at the top of their scope
- Prefer `let`/`const` over `var`
- Use `const` by default, `let` if reassignment is needed
- Avoid using `var` to prevent scope bugs

---

# Arrow Functions & 'this'

This section covers how arrow functions work in JavaScript, how they differ from regular functions, and how the value of `this` changes in different contexts. All runnable code is in [Arrow_function.js](./Arrow_function.js).

- [Arrow Functions & 'this': Concepts and Examples](#arrow-functions--this-concepts-and-examples) ([Arrow_function.js](./Arrow_function.js))

---

# Arrow Functions & 'this': Concepts and Examples

Arrow functions provide a concise syntax for writing functions, but they behave differently from regular functions, especially with respect to `this`.

## What is `this`?

- `this` refers to the object that is executing the current function.
- In the global context, `this` refers to the global object (`window` in browsers, `global` in Node.js).
- In a method, `this` refers to the object the method belongs to.

## Regular Functions vs Arrow Functions

- **Regular functions** have their own `this` (dynamic, depends on how the function is called).
- **Arrow functions** do NOT have their own `this`; they inherit it from the parent (lexical) scope.

## Examples

```js
// Regular function as object method
const user = {
  name: "kush",
  welcome: function () {
    console.log(this); // Refers to user
    console.log(`${this.name} , welcome to js`); // kush , welcome to js
  },
};
user.welcome();

// Arrow function as object method (pitfall)
const user2 = {
  name: "kush",
  welcome: () => {
    console.log(this); // Refers to global object, not user2
    console.log(`${this.name} , welcome to js`); // undefined , welcome to js
  },
};
user2.welcome();

// Arrow function in global scope
const arrowFunc = () => {
  let k = 5;
  console.log(this); // global object
  console.log(this.k); // undefined
  console.log(k); // 5
};
arrowFunc();
```

## Arrow Function Syntax Variations

```js
const arrow1 = () => {
  console.log("I am an arrow function");
};
const arrow2 = (a, b) => a + b; // Implicit return
const arrow3 = (a, b) => a + b; // Shortest
arrow1();
console.log(arrow2(3, 4));
console.log(arrow3(3, 4));
```

## IIFE: Immediately Invoked Function Expression

- Used to avoid polluting the global scope and to run code immediately.
- Works with both regular and arrow functions.

```js
(function () {
  console.log("IIFE with regular function");
})();
(() => console.log("IIFE with arrow function"))();
((name) => console.log("name is:", name))("kush");
```

## Common Pitfalls & Best Practices

- Arrow functions do NOT have their own `this`, `arguments`, or `super`.
- Never use arrow functions as object methods if you need `this` to refer to the object.
- In global scope, `this` refers to the global object.
- Always use a semicolon before IIFE to avoid automatic semicolon insertion issues.
- Arrow functions are best for short, stateless functions, callbacks, and array methods.

See [Arrow_function.js](./Arrow_function.js) for runnable code and more detailed comments.

---

# Call Stack & Control Flow in JavaScript

This section covers how JavaScript manages function calls (call stack) and the main control flow structures: if/else, comparison, truthy/falsy, ternary, switch, and the nullish coalescing operator. All runnable code is in [Control_flow.js](./Control_flow.js).

## Call Stack

The call stack is how JavaScript keeps track of function calls. Each time a function is called, a new frame is added to the stack. When a function returns, its frame is removed.

**Example:**

```js
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
// Output:
// Start
// Inside first()
// Inside second()
// Inside third()
// Back in first()
// End
```

---

## Control Flow: if, else, else if

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

let score = 45;
if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

let temp = 30;
if (temp > 35) {
  console.log("It's hot");
} else if (temp > 20) {
  console.log("It's warm");
} else {
  console.log("It's cold");
}
```

---

## Comparison Operators

- `==` (loose equality): compares values after type coercion
- `===` (strict equality): compares value and type
- `!=`, `!==`, `>`, `<`, `>=`, `<=`

```js
console.log(5 > 3); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 4); // true
console.log(5 !== "5"); // true
```

---

## Truthy and Falsy Values

- **Falsy values:** `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`, `0n` (BigInt zero)
- **Truthy values:** `'0'`, `'false'`, `' '`, `[]`, `{}`, `function(){}`

```js
let falsyValues = [false, 0, "", null, undefined, NaN, 0n];
falsyValues.forEach((val) => {
  if (!val) console.log(val, "is falsy");
});

let truthyValues = ["0", "false", " ", [], {}, function () {}];
truthyValues.forEach((val) => {
  if (val) console.log(val, "is truthy");
});
```

---

## Ternary Operator

A shorthand for if/else:

```js
let isMember = true;
let price = isMember ? 10 : 20;
console.log("Price:", price); // 10 if true, 20 if false
```

---

## Switch Statement

```js
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
```

---

## Nullish Coalescing Operator (`??`)

Returns the right-hand value only if the left is `null` or `undefined` (not for other falsy values like `''` or `0`).

```js
let userInput = null;
let defaultValue = "Guest";
let name = userInput ?? defaultValue;
console.log("Hello,", name); // Hello, Guest

let emptyString = "";
console.log(emptyString ?? "Default"); // '' (empty string, not null/undefined)
```

---

# Loops in JavaScript

This section covers the main types of loops in JavaScript, with examples, justifications, and tips for when to use each. All runnable code is in [Loops.js](./Loops.js).

## for Loop

Use when you know how many times to repeat.

```js
for (let i = 0; i < 5; i++) {
  console.log("i:", i);
}
// Output: 0 1 2 3 4
```

## Nested Loops

Use for grids, matrices, or combinations.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

## break

Use to exit a loop early.

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // stops at 2
}
```

## continue

Use to skip the current iteration and continue with the next.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // skips 2
}
```

## while Loop

Use when you don't know how many times to loop in advance.

```js
let count = 0;
while (count < 3) {
  console.log("count:", count);
  count++;
}
```

## do...while Loop

Always runs at least once, even if the condition is false initially.

```js
let num = 0;
do {
  console.log("num:", num);
  num++;
} while (num < 2);
```

## forEach Loop

Best for iterating over arrays. Cannot use break/continue.

```js
const arr = ["a", "b", "c"];
arr.forEach((element, idx) => {
  console.log(idx, element);
});
```

---

## When to Use Which Loop

- **for**: When you know how many times to loop (counted loops)
- **while**: When you loop until a condition (uncounted loops)
- **do...while**: When you need to run at least once
- **forEach**: For array iteration, functional style
- **break**: To exit early
- **continue**: To skip an iteration

### Confusions & Tips

- `forEach` can't use `break`/`continue`
- `while` can create infinite loops if not careful
- `for` is most flexible, but `forEach` is more readable for arrays

---

# Map in JavaScript

This section covers the JavaScript `Map` class: what it is, how to use it, all major methods, static and dynamic examples, when to use it, common confusions, and conversion to/from arrays. All runnable code is in [Maps.js](./Maps.js).

## What is a Map?

- A `Map` is a built-in object for storing key-value pairs.
- Keys can be any type (objects, functions, primitives).
- Maintains insertion order.

## Static Map Example

```js
const staticMap = new Map([
  ["brand", "Toyota"],
  ["model", "Corolla"],
  [2024, "Year as key"],
  [{ id: 1 }, "Object as key"],
]);
console.log(staticMap.get("brand")); // Toyota
console.log(staticMap.get(2024)); // Year as key
```

## Dynamic Map Example & Methods

```js
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
map.set(1, "one");
const objKey = { id: 1 };
map.set(objKey, "Object as key");

console.log(map.get("name")); // Alice
console.log(map.get(objKey)); // Object as key
console.log(map.has("age")); // true
map.delete("age");
console.log(map.size); // 3
// map.clear(); // Removes all entries
```

## Iterating a Map

```js
map.set("country", "India");
for (let key of map.keys()) console.log(key);
for (let value of map.values()) console.log(value);
for (let [key, value] of map.entries()) console.log(key, value);
map.forEach((value, key) => console.log("forEach:", key, value));
```

## Special Features

- Any type as key (object, function, etc):

```js
const funcKey = function () {};
map.set(funcKey, "Function as key");
console.log(map.get(funcKey));
```

- Chaining:

```js
map.set("x", 1).set("y", 2);
console.log(map.get("x"), map.get("y"));
```

## When to Use Map

- When you need keys that are not just strings (e.g., objects, functions)
- When you need to preserve insertion order
- When you need frequent additions/removals
- When you want a reliable size property
- For large, dynamic collections

## Common Confusions: Map vs Object

- Object keys are always strings/symbols; Map keys can be any type
- Map remembers insertion order; Object does not guarantee order
- Map has `.size`; Object uses `Object.keys(obj).length`
- Map is iterable directly; Object is not
- Map methods: `set`, `get`, `has`, `delete`, `clear`, `forEach`, `keys`, `values`, `entries`
- Use Object for static, fixed structure (like configs, models)
- Use Map for dynamic, frequently changing collections

## Convert Map to Array

```js
const arrFromMap = Array.from(map);
console.log(arrFromMap);
```

## Convert Array to Map

```js
const arr = [
  ["a", 1],
  ["b", 2],
];
const mapFromArr = new Map(arr);
console.log(mapFromArr);
```

---

# Object-Specific Loops in JavaScript

This section explains the differences between `forEach`, `for...of`, and `for...in` loops, with examples for arrays, objects, Map, and string. It also summarizes which loop is best for which data structure.

## forEach

- **Best for:** Arrays
- **Not for:** Objects, strings, Map (directly)
- **Notes:** Cannot use `break`/`continue`.

```js
const arr = ["a", "b", "c"];
arr.forEach((element, idx) => {
  console.log("forEach array:", idx, element);
});
```

## for...of

- **Best for:** Arrays, strings, Map, Set (any iterable)
- **Not for:** Plain objects (will throw error)

```js
// Array
for (const element of arr) {
  console.log("for...of array:", element);
}

// String
const str = "hi!";
for (const char of str) {
  console.log("for...of string:", char);
}

// Map
const map = new Map([
  ["x", 1],
  ["y", 2],
]);
for (const [key, value] of map) {
  console.log("for...of map:", key, value);
}
```

## for...in

- **Best for:** Objects (enumerates keys)
- **Not recommended for:** Arrays (iterates indexes as strings, can be confusing)
- **Not for:** Map, Set, string (not useful)

```js
const obj = { a: 1, b: 2 };
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log("for...in object:", key, obj[key]);
  }
}

// for...in on array (not recommended)
for (const idx in arr) {
  console.log("for...in array:", idx, arr[idx]);
}
```

---

## Summary Table: Which Loop for Which Data Structure?

| Loop Type | Array | Object | String | Map  | Set  |
| --------- | :---: | :----: | :----: | :--: | :--: |
| forEach   |  ✅   |   ❌   |   ❌   | ❌\* | ❌\* |
| for...of  |  ✅   |   ❌   |   ✅   |  ✅  |  ✅  |
| for...in  | ⚠️\*  |   ✅   |   ❌   |  ❌  |  ❌  |

- ✅ = Best/Recommended
- ❌ = Not suitable/does not work
- ⚠️\* = Works, but not recommended (for arrays: iterates indexes as strings)
- ❌\* = forEach exists on Map/Set, but callback signature is different and not as commonly used as for...of

### Best Practices

- Use **forEach** for arrays when you want functional style and don't need to break/continue.
- Use **for...of** for any iterable (arrays, strings, Map, Set) for clean, readable iteration.
- Use **for...in** for objects to enumerate keys, but avoid for arrays.
- Do not use for...of on plain objects (will throw error).
- Do not use forEach on objects or strings.

---

# High Order Array Functions in JavaScript

This section covers the most important high order functions for arrays: `forEach`, `map`, `filter`, and `reduce`. These are essential for modern web development, enabling clean, declarative data transformations.

## What is a High Order Function?

A high order function is a function that takes another function as an argument or returns a function. Array methods like `forEach`, `map`, `filter`, and `reduce` are high order functions.

## forEach

- **Purpose:** Execute a function for each element (side effects, not for building new arrays)
- **Syntax:** `arr.forEach((element, index, array) => { ... })`
- **Returns:** `undefined`
- **When to use:** Logging, DOM updates, side effects

```js
const arr = [1, 2, 3, 4, 5];
arr.forEach((num, idx, array) => {
  console.log("forEach:", idx, num, array);
});
```

## map

- **Purpose:** Create a new array by transforming each element
- **Syntax:** `arr.map((element, index, array) => newValue)`
- **Returns:** New array (same length)
- **When to use:** When you want to transform data

```js
const doubled = arr.map((num, idx, array) => num * 2);
console.log("map result:", doubled); // [2, 4, 6, 8, 10]
```

## filter

- **Purpose:** Create a new array with elements that pass a test
- **Syntax:** `arr.filter((element, index, array) => boolean)`
- **Returns:** New array (may be shorter)
- **When to use:** When you want to select a subset of data

```js
const evens = arr.filter((num, idx, array) => num % 2 === 0);
console.log("filter result:", evens); // [2, 4]
```

## reduce

- **Purpose:** Reduce array to a single value (sum, product, object, etc.)
- **Syntax:** `arr.reduce((accumulator, current, index, array) => newAccumulator, initialValue)`
- **Returns:** Any value (number, array, object, etc.)
- **When to use:** When you want to aggregate data

```js
const sum = arr.reduce((acc, num, idx, array) => acc + num, 0);
console.log("reduce sum:", sum); // 15
```

---

## Why Are These Important for Web Development?

- Enable clean, declarative data transformations (UI lists, filtering, aggregating)
- Avoid manual loops, less error-prone
- Support chaining for complex operations
- Immutability: do not mutate original array (except forEach)
- Used everywhere in React, Vue, Angular, etc.

## Things to Remember & Avoid

- `forEach`: No return value, use for side effects only
- `map`/`filter`: Always return new arrays, do not mutate original
- `reduce`: Can return any value (number, array, object)
- All take a callback: `(element, index, array)`
- Can be chained: `arr.filter(...).map(...).reduce(...)`
- Don't mutate the original array unless intended
- Avoid using `forEach` when you need a new array (use `map` or `filter` instead)
- Use `reduce` for aggregation, but don't overcomplicate—sometimes `map` + `filter` is clearer
