// -----------------------------------
// 1. Manual Object Creation with Object Literals
// -----------------------------------
// Simple and direct, but not scalable for many objects.
// No method sharing, code repetition, not suitable for large codebases.

const person1 = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const person2 = {
  name: "Bob",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

// Drawback: If you want to create 100 users, you have to repeat code 100 times.

// -----------------------------------
// 2. Object Creation Using Functions
// -----------------------------------
// More scalable, but has its own issues.

function createUser(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
  // return this; // not necessary with 'new'
}

// Without 'new', pollutes global object (bad):
// const user1 = createUser("Charlie", 22);
// console.log(user1); // undefined, and 'this' refers to global object

// With 'new', creates separate objects:
const user3 = new createUser("Charlie", 22);
const user4 = new createUser("Diana", 28);
user3.greet(); // Output: Hello, my name is Charlie
user4.greet(); // Output: Hello, my name is Diana

// Drawbacks:
// - Each object gets its own copy of methods (wastes memory)
// - No inheritance, encapsulation, or abstraction
// - Hard to manage large codebases

// -----------------------------------
// 3. Real OOP: Using Classes (ES6+)
// -----------------------------------
// Classes solve the above problems and introduce OOP pillars.

// Encapsulation: Data (properties) and methods are bundled together.
// Abstraction: Internal details can be hidden (e.g., private fields in modern JS).
// Inheritance: Classes can extend other classes.
// Polymorphism: Methods can be overridden in subclasses.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user5 = new User("Eve", 35);
user5.greet(); // Output: Hello, my name is Eve

// Inheritance Example
class Student extends User {
  constructor(name, age, rollno) {
    super(name, age); // Call parent constructor
    this.rollno = rollno;
  }
  // Polymorphism: override greet
  greet() {
    console.log(`Hi, I'm ${this.name} and my roll number is ${this.rollno}`);
  }
}

const student1 = new Student("Frank", 20, 101);
student1.greet(); // Output: Hi, I'm Frank and my roll number is 101

// Abstraction (using private fields, ES2022+)
class SecretUser {
  #secret;
  constructor(name, secret) {
    this.name = name;
    this.#secret = secret; // private field
  }
  revealSecret() {
    console.log(`${this.name}'s secret is: ${this.#secret}`);
  }
}

const secretUser = new SecretUser("Grace", "Loves JS");
secretUser.revealSecret(); // Output: Grace's secret is: Loves JS
// console.log(secretUser.#secret); // Error: private field

// -----------------------------------
// Why OOP is Better
// -----------------------------------
// - Code reuse via inheritance
// - Shared methods (memory efficient)
// - Encapsulation and abstraction for better security and maintainability
// - Polymorphism for flexible code
// - Scalable for large applications

// In summary: Object literals are simple but not scalable. Function-based creation is better but lacks OOP features. Classes (OOP) provide a robust, scalable, and maintainable way to model real-world entities in code.
