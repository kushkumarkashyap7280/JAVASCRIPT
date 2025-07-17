// ====================== High Order Array Functions ===========================

// What is a high order function?
// A high order function is a function that takes another function as an argument or returns a function.
// Array methods like forEach, map, filter, reduce are high order functions.

const arr = [1, 2, 3, 4, 5];

// --- forEach ---
// Executes a function for each element. Does not return a new array.
// Syntax: arr.forEach((element, index, array) => { ... })
arr.forEach((num, idx, array) => {
  console.log("forEach:", idx, num, array);
});
// Use for side effects (logging, DOM updates), not for building new arrays.

// --- map ---
// Creates a new array by transforming each element.
// Syntax: arr.map((element, index, array) => newValue)
const doubled = arr.map((num, idx, array) => {
  return num * 2;
});
console.log("map result:", doubled); // [2, 4, 6, 8, 10]
// map always returns a new array, original is unchanged.

// --- filter ---
// Creates a new array with elements that pass the test.
// Syntax: arr.filter((element, index, array) => boolean)
const evens = arr.filter((num, idx, array) => num % 2 === 0);
console.log("filter result:", evens); // [2, 4]
// filter returns a new array, original is unchanged.

// --- reduce ---
// Reduces array to a single value (sum, product, object, etc.)
// Syntax: arr.reduce((accumulator, current, index, array) => newAccumulator, initialValue)
const sum = arr.reduce((acc, num, idx, array) => {
  return acc + num;
}, 0);
console.log("reduce sum:", sum); // 15
// reduce can do much more: flatten arrays, build objects, etc.

// --- Chaining high order methods ---
// You can chain map, filter, reduce for powerful data transformations
const chainResult = arr
  .filter((num) => num > 2) // [3, 4, 5]
  .map((num) => num * 10) // [30, 40, 50]
  .map((num) => num + 1) // [31, 41, 51]
  .reduce((acc, num) => acc + num, 0); // 123
console.log("chaining result:", chainResult);
// Chaining is useful for readable, step-by-step data processing

// --- Why are these important for web development? ---
// - Enable clean, declarative data transformations (UI lists, filtering, aggregating)
// - Avoid manual loops, less error-prone
// - Support chaining for complex operations
// - Immutability: do not mutate original array (except forEach)
// - Used everywhere in React, Vue, Angular, etc.

// --- Things to remember ---
// - forEach: no return value, use for side effects only
// - map/filter: always return new arrays
// - reduce: can return any value (number, array, object)
// - All take a callback: (element, index, array)
// - Can be chained: arr.filter(...).map(...).reduce(...)
// - Don't mutate original array unless intended
