// ============================ THIS & ARROW FUNCTION ========================================

// --- 1. 'this' in Regular Functions ---
const user = {
  name: "kush",
  welcome: function () {
    // console.log(`${name} , welcome to js`); // Error: 'name' is not defined in this scope
    console.log("this in method:", this); // Refers to 'user' object
    console.log(`${this.name} , welcome to js`); // Correct usage
  },
};

console.log("user object:", user);
console.log("global this:", this); // In browser: window, in Node: global
user.welcome();

// --- 2. 'this' in Regular Functions (Global/Function Scope) ---
function dummy() {
  let k = 5;
  console.log("this in function:", this); // In Node: global, in browser: window
  console.log("this.k:", this.k); // undefined (k is not a property of global)
  console.log("k:", k); // 5 (local variable)
}
dummy();

// --- 3. 'this' in Arrow Functions ---
const arrowFunc = () => {
  let k = 5;
  console.log("this in arrow function:", this); // Inherits from parent scope (global here)
  console.log("this.k:", this.k); // undefined
  console.log("k:", k); // 5
};
arrowFunc();

// --- 4. Arrow Function as Object Method (Pitfall) ---
const user2 = {
  name: "kush",
  welcome: () => {
    // Arrow functions do NOT have their own 'this'; 'this' is inherited from parent (global)
    console.log("this in arrow method:", this);
    console.log(`${this.name} , welcome to js`); // undefined, because 'this' is not 'user2'
  },
};
user2.welcome(); // Pitfall: 'this.name' is undefined

// --- 5. Arrow Function Syntax Variations ---
const arrow1 = () => {
  console.log("I am an arrow function stored in a variable");
};
const arrow2 = (a, b) => a + b; // Implicit return
const arrow3 = (a, b) => a + b; // Even shorter
arrow1();
console.log("arrow2(3,4):", arrow2(3, 4));
console.log("arrow3(3,4):", arrow3(3, 4));

// --- 6. IIFE: Immediately Invoked Function Expression ---
// Used to avoid polluting the global scope and to run code immediately
console.log("start");
(function () {
  console.log("IIFE with regular function");
})();
console.log("mid");
(() => console.log("IIFE with arrow function"))();
console.log("end");

// IIFE with arguments
((name) => console.log("name is:", name))("kush");

// --- 7. Confusing Points Explained ---
// - Arrow functions do NOT have their own 'this', 'arguments', or 'super'.
// - Never use arrow functions as object methods if you need 'this' to refer to the object.
// - In global scope, 'this' refers to global object (window in browser, global in Node).
// - Always use a semicolon before IIFE to avoid automatic semicolon insertion issues.
// - Arrow functions are best for short, stateless functions, callbacks, and array methods.
