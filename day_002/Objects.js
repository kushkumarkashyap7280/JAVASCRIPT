// =================== OBJECTS =================================

// 0. Singleton Object
// A singleton is an object that is created only once and reused everywhere.
// In JavaScript, any object literal or module export is effectively a singleton.
const singleton = { id: 1, name: "I am unique" };
console.log("Singleton object:", singleton);

// 1. Object Creation
// Using object literal
const sym = Symbol("kkk"); // Symbol for unique property key
const Jsuser = {
  [sym]: "symbol value", // Symbol as property key
  name: "kush",
  rollno: 5,
  class: "6th",
};
console.log("Object literal:", Jsuser);

// Using Object constructor (not recommended)
const objA = new Object();
objA.x = 10;
console.log("Object constructor:", objA);

// Using Object.create (prototype-based)
const proto = {
  greet() {
    return "Hello!";
  },
};
const objB = Object.create(proto);
objB.name = "protoObj";
console.log("Object.create:", objB, objB.greet());

// Factory Function (returns a new object each time)
function createUser(name, age) {
  return { name, age };
}
const user1 = createUser("Alice", 25);
const user2 = createUser("Bob", 30);
console.log("Factory function user1:", user1);
console.log("Factory function user2:", user2);

// Constructor Function (used with 'new')
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Charlie", 40);
console.log("Constructor function object:", p1);

// Class-based Object (ES6+)
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    return `I am a ${this.type}`;
  }
}
const dog = new Animal("dog");
console.log("Class-based object:", dog, dog.speak());

// 2. Property Access
console.log("Dot notation:", Jsuser.name);
console.log("Bracket notation:", Jsuser["name"]);
console.log("Symbol property:", Jsuser[sym]);

// 3. Object Methods
console.log("Has own property 'name':", Jsuser.hasOwnProperty("name"));
console.log("Object.keys:", Object.keys(Jsuser));
console.log("Object.values:", Object.values(Jsuser));
console.log("Object.entries:", Object.entries(Jsuser));

// 4. Modifying Properties
Jsuser.name = "kumar";
console.log("Modified name:", Jsuser.name);

// 5. Object.freeze: makes object immutable (shallow)
Object.freeze(Jsuser);
Jsuser.name = "rohan"; // No effect
console.log("After freeze attempt:", Jsuser.name);

// 6. Object.seal: prevents adding/removing properties, but allows modification
const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // Allowed
// sealedObj.b = 3; // Not allowed
console.log("Sealed object:", sealedObj);

// 7. Object.preventExtensions: prevents adding new properties
const noExtObj = { x: 1 };
Object.preventExtensions(noExtObj);
noExtObj.x = 2; // Allowed
// noExtObj.y = 3; // Not allowed
console.log("PreventExtensions object:", noExtObj);

// 8. Adding Methods to Objects
Jsuser.print = function () {
  console.log("hello kush");
};
Jsuser.print();

Jsuser.printName = function () {
  console.log(`hello user ${this.name}`);
};
Jsuser.printName();

// Arrow function and 'this' confusion:
Jsuser.arrowPrint = () => {
  // 'this' does NOT refer to the object here
  console.log(`arrowPrint: hello user ${this.name}`); // undefined
};
Jsuser.arrowPrint();
// Use regular functions for methods needing 'this'.

// 9. Optional Chaining
console.log("Optional chaining (non-existent):", Jsuser?.k);
console.log("Optional chaining (method):", Jsuser?.printName?.());

// 10. Merging Objects
const obj1 = { 1: 1, 2: 2 };
const obj2 = { 3: 3, 4: 4 };
const obj3a = Object.assign({}, obj1, obj2); // Merges into new object
const obj3b = { ...obj1, ...obj2 }; // Spread operator (shallow copy)
console.log("Object.assign:", obj3a);
console.log("Spread operator:", obj3b);

// Note: Both assign and spread do shallow copies. For deep copy, use structuredClone or JSON methods (with limitations).

// 11. Destructuring
const student = { name: "kush", class: "12th" };
const { name, class: c } = student;
console.log("Destructured name:", name);
console.log("Destructured class (as c):", c);

// 12. Object.getOwnPropertyNames
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(Jsuser));

// 13. JSON Objects (data format, not real JS objects)
// JSON is a string format for data interchange, not a JS object.
const jsonString = '{ "name": "kush", "fees": "200", "class": "12th" }';
const jsonObj = JSON.parse(jsonString);
console.log("Parsed JSON:", jsonObj);
console.log("Stringified JSON:", JSON.stringify(jsonObj));

// 14. API Response Example (see README for more)
// See below for a sample JSON API response structure.

// Confusing Points Explained:
// - Object.freeze vs Object.seal vs Object.preventExtensions:
//   * freeze: cannot add/remove/modify properties (shallow)
//   * seal: cannot add/remove, but can modify existing
//   * preventExtensions: cannot add, can remove/modify
// - Symbol: unique property keys, not accessible via normal Object.keys
// - Arrow functions do NOT bind 'this' to the object
// - Shallow vs Deep copy: assign/spread only copy top-level properties
// - JSON is not a JS object, but a string format for data

// --- Sample JSON API response (for reference, not JS code) ---
// {
//   "links": { "self": "http://example.com/articles" },
//   "data": [ { "type": "articles", "id": "1", "attributes": { "title": "JSON:API paints my bikeshed!" } } ],
//   "included": [ { "type": "people", "id": "9", "attributes": { "firstName": "Dan" } } ]
// }
