// -----------------------------------
// Four Pillars of OOP in JavaScript (with Classes)
// -----------------------------------

// 1. Encapsulation
//    - Bundling data (properties) and methods (functions) together inside a class.
//    - Hides internal state and requires all interaction to be performed through methods.

class Person {
  constructor(name, age) {
    this.name = name; // public property
    this._age = age; // conventionally 'protected' (not enforced in JS)
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  getAge() {
    return this._age;
  }
}

const p1 = new Person("Alice", 25);
p1.greet(); // Output: Hello, my name is Alice

// 2. Abstraction
//    - Hiding complex implementation details and showing only the necessary features.
//    - In JS, you can use methods to hide details, or use private fields (with #).

class BankAccount {
  #balance; // private field (ES2022+)
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Bob", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // Output: 1500
// console.log(acc.#balance); // Error: private field

// 3. Inheritance
//    - Allows a class to inherit properties and methods from another class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent class constructor
    this.breed = breed;
  }
  speak() {
    // Polymorphism: override parent method
    console.log(`${this.name} barks.`);
  }
}

const d1 = new Dog("Buddy", "Labrador");
d1.speak(); // Output: Buddy barks.

// 4. Polymorphism
//    - The ability for different classes to define methods with the same name, but different implementations.
//    - Achieved via method overriding (as above).

// -----------------------------------
// super Keyword
// -----------------------------------
// - Used to call the constructor or methods of the parent class from a subclass.

class Parent {
  constructor() {
    this.value = 42;
  }
  show() {
    console.log("Parent show:", this.value);
  }
}

class Child extends Parent {
  constructor() {
    super(); // Calls Parent's constructor
    this.childValue = 100;
  }
  show() {
    super.show(); // Calls Parent's show()
    console.log("Child show:", this.childValue);
  }
}

const c = new Child();
c.show();
// Output:
// Parent show: 42
// Child show: 100

// -----------------------------------
// Static Methods
// -----------------------------------
// - Defined with the 'static' keyword inside a class.
// - Called on the class itself, not on instances.

class MathUtil {
  static add(a, b) {
    return a + b;
  }
  static description = "Utility class for math operations";
}

console.log(MathUtil.add(5, 7)); // Output: 12
console.log(MathUtil.description); // Output: Utility class for math operations

// const m = new MathUtil();
// m.add(1, 2); // Error: add is not a function on instance

// -----------------------------------
// Access Modifiers in JavaScript
// -----------------------------------
// JavaScript (ES2022+) supports:
// - public (default): accessible from anywhere
// - private (#): accessible only within the class
// - protected: not natively supported, but by convention use _ (underscore)

class Demo {
  publicField = "I am public"; // public by default
  #privateField = "I am private"; // truly private
  _protectedField = "I am 'protected' (by convention)"; // not enforced

  showFields() {
    console.log(this.publicField); // Accessible
    console.log(this.#privateField); // Accessible
    console.log(this._protectedField); // Accessible
  }
}

const demo = new Demo();
console.log(demo.publicField); // OK
// console.log(demo.#privateField); // Error: private field
console.log(demo._protectedField); // OK (but should be treated as protected)
demo.showFields(); // All fields accessible inside the class

// -----------------------------------
// Summary
// -----------------------------------
// - Four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism
// - super: Calls parent constructor/methods
// - static: Class-level methods/properties
// - Access modifiers: public, private (#), protected (by convention)
