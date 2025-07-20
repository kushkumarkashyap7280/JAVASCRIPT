// -----------------------------------
// What is Prototype in JavaScript?
// -----------------------------------

// In JavaScript, every object has a hidden internal property called [[Prototype]] (commonly accessed as __proto__ in browsers).
// The prototype is itself an object, and it acts as a template from which other objects inherit properties and methods.

// When you try to access a property or method on an object, JavaScript will first look for it on the object itself.
// If it doesn't find it, it will look up the prototype chain (i.e., the object's prototype, then that prototype's prototype, and so on).

// -----------------------------------
// How to See Prototype in Browser Console
// -----------------------------------

// Example:
const user = { name: "Alice" };
console.log(user); // In browser console, expand the object to see __proto__

// All objects created from object literals inherit from Object.prototype
// You will see __proto__ in the console, which contains methods like toString(), hasOwnProperty(), etc.

// Example with constructor function:
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Bob");
console.log(person1); // In browser, expand to see __proto__ with sayHello

// -----------------------------------
// Benefits and Importance of Prototype
// -----------------------------------

// 1. Memory Efficiency:
//    - Methods defined on the prototype are shared among all instances.
//    - This saves memory compared to defining methods inside the constructor.

// 2. Inheritance:
//    - Prototypes enable inheritance in JavaScript.
//    - Objects can inherit properties and methods from other objects.

// 3. Extensibility:
//    - You can add new methods to built-in types (like Array, String) via their prototype.
//    - Example:
Array.prototype.first = function () {
  return this[0];
};
const arr = [10, 20, 30];
console.log(arr.first()); // Output: 10

// 4. Prototype Chain:
//    - Allows for property/method lookup up the chain, enabling powerful and flexible code reuse.

// -----------------------------------
// Why is Prototype Important?
// -----------------------------------

// - Prototypes are the foundation of JavaScript's inheritance model (prototype-based inheritance).
// - They allow objects to share behavior efficiently.
// - Understanding prototypes is key to mastering JavaScript, especially for OOP, inheritance, and working with classes (which use prototypes under the hood).

// -----------------------------------
// Modern Classes and Prototype
// -----------------------------------

// ES6 classes are syntactic sugar over the prototype system.
// Methods defined in a class are actually placed on the class's prototype.

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
const dog = new Animal();
console.log(dog.__proto__ === Animal.prototype); // true
dog.speak(); // Output: Animal speaks

// -----------------------------------
// Summary
// -----------------------------------
// - Every object in JS has a prototype.
// - Prototypes enable inheritance and method sharing.
// - You can view and explore prototypes in the browser console via __proto__.
// - Mastering prototypes is essential for advanced JavaScript development.
