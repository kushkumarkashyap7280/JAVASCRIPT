# Day 1 Summary (2024-06-09)

Welcome to Day 1! Here’s a quick-access summary of all topics covered, with direct links to each section and runnable code file in this folder:

- [JavaScript Variables: Declaration, Assignment, and Scope](#javascript-variables-declaration-assignment-and-scope) ([Variables.js](./Variables.js))
- [JavaScript Data Types: Primitive and Non-Primitive](#javascript-data-types-primitive-and-non-primitive) ([Datatypes.js](./Datatypes.js))
- [JavaScript Type Casting (Type Conversion)](#javascript-type-casting-type-conversion) ([Typecasting.js](./Typecasting.js))
- [JavaScript Operators](#javascript-operators) ([Operators.js](./Operators.js))
- [Stack vs Heap Memory in JavaScript](#stack-vs-heap-memory-in-javascript) ([Stack_and_Heap.js](./Stack_and_Heap.js))
- [JavaScript Strings](#javascript-strings) ([Strings.js](./Strings.js))

➡️ **[Open the Day 1 Folder](../day_001/)**

---

# JavaScript Variables: Declaration, Assignment, and Scope

This directory demonstrates how to declare, assign, and use variables in JavaScript using `var`, `let`, and `const`. It also explains their scope and provides runnable examples in [`Variables.js`](./Variables.js).

## What is a Variable?

A **variable** is a named container for storing data values. In JavaScript, variables can be declared using `var`, `let`, or `const`.

## Variable Declaration and Assignment

- **Declaration**: Creating a variable (reserving memory).
- **Assignment**: Giving a value to the variable.

Example:

```js
let age; // Declaration
age = 25; // Assignment
let name = "Alice"; // Declaration + Assignment
```

## Types of Variable Declarations

### 1. `var`

- **Scope**: Function-scoped or globally scoped.
- **Reassignment**: Allowed.
- **Redeclaration**: Allowed in the same scope.

```js
var x = 10;
x = 20; // OK
var x = 30; // OK
```

### 2. `let`

- **Scope**: Block-scoped (within `{}`).
- **Reassignment**: Allowed.
- **Redeclaration**: Not allowed in the same scope.

```js
let y = 5;
y = 15; // OK
// let y = 25; // Error: Cannot redeclare
```

### 3. `const`

- **Scope**: Block-scoped.
- **Reassignment**: Not allowed (must assign at declaration).
- **Redeclaration**: Not allowed in the same scope.

```js
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable
```

## Scope Examples

```js
function varScopeExample() {
  var a = 1;
  if (true) {
    var a = 2; // Same variable
    console.log(a); // 2
  }
  console.log(a); // 2
}

function letScopeExample() {
  let b = 1;
  if (true) {
    let b = 2; // Different variable
    console.log(b); // 2
  }
  console.log(b); // 1
}
```

## Summary Table

| Keyword | Scope           | Reassignment | Redeclaration |
| ------- | --------------- | ------------ | ------------- |
| var     | function/global | Yes          | Yes           |
| let     | block           | Yes          | No            |
| const   | block           | No           | No            |

## Run the Examples

See [`Variables.js`](./Variables.js) for runnable code examples and more detailed comments.

---

# JavaScript Data Types: Primitive and Non-Primitive

JavaScript has two main categories of data types: **primitive** and **non-primitive** (reference) types. See [`Datatypes.js`](./Datatypes.js) for runnable code examples.

## Primitive Data Types

- **String**: Textual data (`"hello"`)
- **Number**: Numeric values (`42`, `3.14`)
- **Boolean**: `true` or `false`
- **Null**: Intentional absence of value (`null`)
- **Undefined**: Variable declared but not assigned
- **Symbol**: Unique and immutable value (for object property keys)
- **BigInt**: Large integers (`123n`)

## Non-Primitive (Reference) Data Types

- **Object**: Key-value pairs (`{ name: "Alice" }`)
- **Array**: Ordered list (`[1, 2, 3]`)
- **Function**: Callable object (`function() {}`)

## let, const, var with Data Types

- `let` and `const` can be used with any data type.
- `const` prevents reassignment, but objects/arrays can still be mutated.
- `let` allows reassignment.
- `var` is function-scoped, allows redeclaration, and should be avoided.

### Why Avoid `var`?

- `var` is not block-scoped, which can lead to bugs and unexpected behavior.
- Allows redeclaration, which can overwrite variables accidentally.
- `let` and `const` are safer and more predictable.

**Example:**

```js
if (true) {
  var x = 100;
  let y = 200;
  const z = 300;
}
console.log(x); // 100 (var leaks out of block)
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined
```

## Summary Table

| Type      | Example      | typeof result |
| --------- | ------------ | ------------- |
| string    | "hello"      | string        |
| number    | 42           | number        |
| boolean   | true         | boolean       |
| null      | null         | object\*      |
| undefined | undefined    | undefined     |
| symbol    | Symbol('id') | symbol        |
| bigint    | 123n         | bigint        |
| object    | {a:1}        | object        |
| array     | [1,2,3]      | object        |
| function  | function(){} | function      |

_Note: `typeof null` returns `object` due to a historical bug in JavaScript._

See [`Datatypes.js`](./Datatypes.js) for runnable code and more details.

---

# JavaScript Type Casting (Type Conversion)

Type casting (type conversion) is the process of converting a value from one data type to another. JavaScript supports both **implicit** (automatic) and **explicit** (manual) type conversion. See [`Typecasting.js`](./Typecasting.js) for runnable code examples.

## Implicit Type Conversion (Coercion)

- Happens automatically in expressions (e.g., `+`, `-`, `*`, `/`, `==`)
- Examples:
  - `'5' + 2` → `'52'` (number to string)
  - `'5' - 2` → `3` (string to number)
  - `true + 1` → `2` (boolean to number)
  - `null + 1` → `1` (null to 0)
  - `undefined + 1` → `NaN` (undefined is not a number)

## Explicit Type Conversion

- Use functions like `Number()`, `String()`, `Boolean()`
- Examples:
  - `Number('123')` → `123`
  - `String(123)` → `'123'`
  - `Boolean(0)` → `false`
  - `Boolean([])` → `true` (empty array is truthy)

## What is Allowed and What is Not

- Most types can be converted, but results may not always be intuitive
- Some conversions result in `NaN` (Not a Number) or unexpected values
- Example: `Number('abc')` → `NaN`, `Number([])` → `0`, `Number([1,2,3])` → `NaN`
- Direct conversion of objects to numbers is not allowed unless `valueOf` or `toString` is defined

## Example Outputs

```js
console.log("5" + 2); // '52'
console.log("5" - 2); // 3
console.log(Number("abc")); // NaN
console.log(Boolean([])); // true
console.log([1, 2, 3] + 4); // '1,2,34'
console.log({} + 1); // '[object Object]1'
console.log([] == false); // true
console.log(null == undefined); // true
```

## Edge Cases

- `typeof null` is `'object'`
- `parseInt('08')` → `8`
- `parseFloat('3.14abc')` → `3.14`

See [`Typecasting.js`](./Typecasting.js) for more detailed and runnable code examples.

---

# JavaScript Operators

JavaScript provides a wide range of operators for performing operations on values and variables. See [`Operators.js`](./Operators.js) for runnable code examples.

## Categories of Operators

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`
- **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- **String Operators**: `+`, `+=` (concatenation)
- **Conditional (Ternary) Operator**: `condition ? expr1 : expr2`
- **typeof Operator**: Returns the type of a variable
- **instanceof Operator**: Checks if an object is an instance of a constructor
- **delete Operator**: Removes a property from an object
- **in Operator**: Checks if a property exists in an object
- **Spread/Rest Operators**: `...` (expands or collects elements)

## Example Usages

```js
// Arithmetic
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a ** b); // 1000

// Assignment
let x = 5;
x += 2;
console.log(x); // 7

// Comparison
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// Logical
console.log(true && false); // false

// Bitwise
console.log(5 & 1); // 1

// String
console.log("Hello" + " World"); // 'Hello World'

// Conditional
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // 'Yes'

// typeof
console.log(typeof 123); // 'number'

// instanceof
console.log([] instanceof Array); // true

// delete
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

// in
console.log("b" in obj); // true

// Spread/Rest
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

See [`Operators.js`](./Operators.js) for a full set of runnable operator examples and more details.

---

# Stack vs Heap Memory in JavaScript

JavaScript manages memory using two main areas: the **stack** and the **heap**. See [`Stack_and_Heap.js`](./Stack_and_Heap.js) for runnable code examples.

## Stack Memory

- Used for static memory allocation
- Stores **primitive values** (number, string, boolean, null, undefined, symbol, bigint)
- Fast access, managed automatically
- Each variable gets its own space on the stack
- Primitives are copied by value

## Heap Memory

- Used for dynamic memory allocation
- Stores **non-primitive values** (objects, arrays, functions)
- Slower access, managed by the JavaScript engine's garbage collector
- Variables store references (pointers) to heap objects
- Non-primitives are copied by reference

## Example: Value vs Reference

```js
// Stack (primitive)
let a = 10;
let b = a;
a = 20;
console.log(b); // 10 (b is unaffected)

// Heap (non-primitive)
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj1.name = "Bob";
console.log(obj2.name); // 'Bob' (both point to the same object)
```

## Summary

- Stack: for simple, short-lived data (primitives)
- Heap: for complex, user-created data (objects, arrays, functions)
- Heap allocation is dynamic and managed by the JavaScript engine

See [`Stack_and_Heap.js`](./Stack_and_Heap.js) for more details and runnable code.

---

# JavaScript Strings

Strings are sequences of characters used to represent text in JavaScript. See [`Strings.js`](./Strings.js) for runnable code examples.

## Creating Strings

- Use single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` `` for template literals)
- Example:
  ```js
  let str1 = "Hello";
  let str2 = "World";
  let str3 = `Hello, ${str2}!`;
  console.log(str3); // 'Hello, World!'
  ```

## String Properties

- `.length`: Returns the number of characters
  ```js
  console.log(str1.length); // 5
  ```

## Common String Methods

- `.charAt(index)`: Get character at position
- `.indexOf(substring)`, `.lastIndexOf(substring)`: Find position of substring
- `.slice(start, end)`, `.substring(start, end)`, `.substr(start, length)`: Extract parts
- `.toUpperCase()`, `.toLowerCase()`: Change case
- `.trim()`, `.trimStart()`, `.trimEnd()`: Remove whitespace
- `.split(separator)`: Split into array
- `.replace(search, replacement)`, `.replaceAll(search, replacement)`: Replace text
- `.includes(substring)`: Check for substring
- `.startsWith(prefix)`, `.endsWith(suffix)`: Check start/end
- `.concat(...strings)`: Concatenate
- `.repeat(count)`: Repeat string
- `.padStart(targetLength, padString)`, `.padEnd(targetLength, padString)`: Pad string
- Access characters with `str[index]`

## Example Usages

```js
let str = "Hello";
console.log(str.charAt(1)); // 'e'
console.log(str.indexOf("l")); // 2
console.log(str.slice(1, 4)); // 'ell'
console.log(str.toUpperCase()); // 'HELLO'
console.log("   spaced   ".trim()); // 'spaced'
console.log("a,b,c".split(",")); // ['a', 'b', 'c']
console.log(str.replace("l", "x")); // 'Hexlo'
console.log(str.includes("ell")); // true
console.log(str.startsWith("He")); // true
console.log(str.repeat(3)); // 'HelloHelloHello'
```

## Template Literals

- Use backticks for interpolation and multiline strings
  ```js
  let name = "Alice";
  let greeting = `Hello, ${name}!
  Welcome to JavaScript.`;
  console.log(greeting);
  ```

## Notes

- Strings are **immutable** (methods return new strings)
- Use string methods for searching, modifying, and formatting text
- See MDN for a full list of string methods

See [`Strings.js`](./Strings.js) for more details and runnable code.
