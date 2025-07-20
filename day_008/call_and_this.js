// -----------------------------------
// What is call() in JavaScript?
// -----------------------------------

// The call() method is a built-in function available on all JavaScript functions.
// It allows you to call (invoke) a function with a specific 'this' value and arguments provided individually.

// Syntax:
// func.call(thisArg, arg1, arg2, ...);

// - thisArg: The value to use as 'this' when executing the function.
// - arg1, arg2, ...: Arguments passed to the function.

// -----------------------------------
// Why is call() Important?
// -----------------------------------

// In JavaScript, the value of 'this' depends on how a function is called.
// Sometimes, you want to borrow a method from one object and use it for another, or you want to control what 'this' refers to inside a function.
// call() lets you explicitly set 'this', making your code more flexible and reusable.

// -----------------------------------
// Usage Example
// -----------------------------------

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };
const anotherPerson = { name: "Bob" };

// Using call() to set 'this' to person
greet.call(person, "Hello", "!"); // Output: Hello, Alice!
greet.call(anotherPerson, "Hi", "..."); // Output: Hi, Bob...

// -----------------------------------
// Real-World Challenge: Losing 'this'
// -----------------------------------

// Problem: When you pass a method as a callback, 'this' can be lost.

const user = {
  name: "Charlie",
  showName: function () {
    console.log(this.name);
  },
};

setTimeout(user.showName, 1000); // Output: undefined (or window.name in browsers)

// Solution: Use call() to explicitly set 'this'

setTimeout(function () {
  user.showName.call(user); // Output: Charlie
}, 1000);

// -----------------------------------
// Another Example: Method Borrowing
// -----------------------------------

const car = {
  brand: "Toyota",
  showBrand: function () {
    console.log(this.brand);
  },
};

const bike = { brand: "Yamaha" };

// Borrow car's showBrand method for bike
car.showBrand.call(bike); // Output: Yamaha

// -----------------------------------
// Summary
// -----------------------------------
// - call() lets you invoke a function with a specific 'this' value.
// - It's useful for method borrowing, fixing 'this' in callbacks, and making code more flexible.
// - Understanding call() is key to mastering 'this' in JavaScript.




