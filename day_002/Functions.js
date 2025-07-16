// ================================== Functions ===============================

// Functions are reusable blocks of code that perform a specific task.
// They help avoid repetition and make code more readable and maintainable.

// 1. Function Declaration (named function)
function print() {
  // No parameters, no return (void)
  console.log("hello world");
}
print; // Reference to the function (not executed)
print(); // Executes the function

// 2. Parameterized Function (with return)
function add(a, b) {
  // a & b are parameters
  return a + b;
  // Code after return is never executed
}
console.log("add(4,5):", add(4, 5));

// 3. Default Parameters
function greet(name = "user") {
  console.log(`hello ! ${name}`);
}
greet(); // Uses default
greet("kush"); // Uses provided argument

// 4. Rest Parameters (...args)
function printArgs(...args) {
  // ...args collects all arguments into an array
  console.log("typeof args:", typeof args); // always 'object' (array)
  args.forEach((e) => {
    console.log(e);
  });
  return args;
}
console.log("printArgs(1,2,3,3,3,3):", printArgs(1, 2, 3, 3, 3, 3));

// 5. Function Expression (anonymous function assigned to variable)
const multiply = function (x, y) {
  return x * y;
};
console.log("multiply(2,3):", multiply(2, 3));

// 6. Arrow Function (ES6+)
const square = (n) => n * n;
console.log("square(5):", square(5));

// Arrow functions do NOT have their own 'this'.
const obj = {
  value: 10,
  regular: function () {
    return this.value;
  },
  arrow: () => this.value, // 'this' is not obj here
};
console.log("obj.regular():", obj.regular());
console.log("obj.arrow():", obj.arrow()); // likely undefined

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed!");
})();

// 8. Callback Function (function passed as argument)
function processUserInput(callback) {
  const name = "CallbackUser";
  callback(name);
}
processUserInput(function (name) {
  console.log("Hello, " + name);
});

// 9. Higher-Order Function (takes/returns function)
function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = makeMultiplier(2);
console.log("double(8):", double(8));

// 10. Function Constructor (rarely used)
const sum = new Function("a", "b", "return a + b;");
console.log("sum(3,4):", sum(3, 4));

// Confusing Points Explained:
// - Rest vs Spread: ...args in function params collects arguments; ... in calls/arrays/objects spreads values.
// - Function Hoisting: Declarations are hoisted, expressions/arrow functions are not.
// - Arrow functions do NOT have their own 'this', 'arguments', or 'super'.
// - IIFE: Function that runs immediately after definition.
