// JavaScript Variable Declaration, Assignment, and Scope Examples

// 1. Using var
var x = 10; // Declaration and assignment
console.log("var x:", x); // Output: 10
x = 20; // Reassignment is allowed
console.log("var x after reassignment:", x); // Output: 20

// var is function-scoped or globally scoped
function varScopeExample() {
  var y = 30;
  if (true) {
    var y = 40; // Same variable, function-scoped
    console.log("var y inside if:", y); // Output: 40
  }
  console.log("var y outside if:", y); // Output: 40
}
varScopeExample();

// 2. Using let
let a = 5; // Declaration and assignment
console.log("let a:", a); // Output: 5
a = 15; // Reassignment is allowed
console.log("let a after reassignment:", a); // Output: 15

// let is block-scoped
function letScopeExample() {
  let b = 25;
  if (true) {
    let b = 35; // Different variable, block-scoped
    console.log("let b inside if:", b); // Output: 35
  }
  console.log("let b outside if:", b); // Output: 25
}
letScopeExample();

// 3. Using const
const PI = 3.14159; // Declaration and assignment (must assign at declaration)
console.log("const PI:", PI); // Output: 3.14159
// PI = 3.14; // Error: Assignment to constant variable

// const is block-scoped
function constScopeExample() {
  const c = 50;
  if (true) {
    const c = 60; // Different variable, block-scoped
    console.log("const c inside if:", c); // Output: 60
  }
  console.log("const c outside if:", c); // Output: 50
}
constScopeExample();

// Summary Table (in comments):
// var   | function/global scope | can reassign | can redeclare
// let   | block scope          | can reassign | cannot redeclare in same scope
// const | block scope          | cannot reassign | cannot redeclare in same scope
