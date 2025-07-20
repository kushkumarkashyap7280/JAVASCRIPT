// -----------------------------------
// Getters and Setters in JavaScript
// -----------------------------------
// Getters and setters allow you to define special methods for reading and writing object properties.
// They provide a way to control access, validation, or computed values for properties.

// 1. Getters and Setters in Object Literals
const person = {
  firstName: "Alice",
  lastName: "Smith",
  get fullName() {
    // Getter: called as a property, not a function
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    // Setter: called when assigning to the property
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1] || "";
  },
};

console.log(person.fullName); // Output: Alice Smith
person.fullName = "Bob Johnson";
console.log(person.firstName); // Output: Bob
console.log(person.lastName); // Output: Johnson

// 2. Getters and Setters in Classes
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    // Getter: compute area on the fly
    return this.width * this.height;
  }
  set area(value) {
    // Setter: adjust width to match new area, keeping height constant
    this.width = value / this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.area = 100;
console.log(rect.width); // Output: 20
console.log(rect.height); // Output: 5

// 3. Why Use Getters and Setters?
// - Encapsulate logic for reading/writing properties
// - Add validation or computed properties
// - Hide internal implementation details

// 4. Example: Validation with Setter
class User {
  constructor() {
    this.age = 0;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
      return;
    }
    this._age = value;
  }
}

const user = new User();
user.age = 25;
console.log(user.age); // Output: 25
user.age = -5; // Output: Age cannot be negative!
console.log(user.age); // Output: 25

// -----------------------------------
// Summary
// -----------------------------------
// - Getters and setters provide controlled access to object properties.
// - Use them for computed properties, validation, and encapsulation.
// - They work in both object literals and classes.
