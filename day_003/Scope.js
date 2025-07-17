// ============================ SCOPE and HOISTING ========================================

// JavaScript Scope and Hoisting
// Scope determines where variables and functions are accessible. Hoisting is JavaScript's behavior of moving declarations to the top of their scope.

// --- 1. Variable Declarations and Hoisting ---
// Always declare variables before use. JavaScript is interpreted line by line, so order matters.

// Hoisting: Variable and function declarations are moved to the top of their scope at runtime.
// Only declarations are hoisted, not initializations.

// Example with var (function/global scope, hoisted, mutable)
console.log("var before declaration:", a); // undefined (hoisted)
var a = 4;
console.log("var after declaration:", a); // 4

{
  var s = 5;
}
console.log("var in block:", s); // 5 (var is NOT block-scoped)

// Example with let (block scope, not accessible before declaration)
// console.log(k); // ReferenceError: Cannot access 'k' before initialization
{
  let k = 0;
  console.log("let in block:", k); // 0
}
// console.log(k); // ReferenceError: k is not defined

// Example with const (block scope, must be initialized, immutable)
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
{
  const c = 10;
  // c = 20; // TypeError: Assignment to constant variable
  console.log("const in block:", c); // 10
}
// console.log(c); // ReferenceError: c is not defined

// --- 2. Function Scope and Lexical Scope ---
function outer() {
  const outerVar = "I'm outer!";
  function inner() {
    const innerVar = "I'm inner!";
    console.log(outerVar); // inner can access outer's variables (lexical scope)
  }
  inner();
  // console.log(innerVar); // Error: innerVar is not defined in outer
}
outer();

// --- 3. Hoisting with Functions ---
// Function declarations are hoisted (can be called before definition)
console.log("addOne(3):", addOne(3));
function addOne(a) {
  return a + 1;
}

// Function expressions are NOT hoisted (cannot be called before definition)
// console.log(addTwo(2)); // TypeError: addTwo is not a function
const addTwo = function (a) {
  return a + 2;
};
console.log("addTwo(2):", addTwo(2));

// --- 4. Summary Table ---
// | Keyword | Scope           | Hoisted | Mutable | Redeclarable |
// | ------- | -------------- | ------- | ------- | ------------ |
// | var     | function/global| Yes     | Yes     | Yes          |
// | let     | block          | No      | Yes     | No           |
// | const   | block          | No      | No      | No           |

// --- 5. Confusing Points Explained ---
// - var is function-scoped, not block-scoped (leaks out of blocks)
// - let/const are block-scoped (only accessible within {})
// - Hoisting moves declarations, but not initializations
// - Function declarations are hoisted, function expressions are not
// - Lexical scope: inner functions can access variables from their parent scope
// - Temporal Dead Zone: let/const cannot be accessed before declaration

// --- 6. Best Practices ---
// - Always declare variables at the top of their scope
// - Prefer let/const over var
// - Use const by default, let if reassignment is needed
// - Avoid using var to prevent scope bugs
