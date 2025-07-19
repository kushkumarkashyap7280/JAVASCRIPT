// 1. What is the event loop?
// The event loop allows JavaScript to perform non-blocking operations by offloading operations to the browser and executing callbacks from the queue.
// Example:
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
// Output: start, end, timeout

// 2. Difference between microtask and macrotask queues?
// Microtasks (e.g., Promises) run before macrotasks (e.g., setTimeout).
Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("macrotask"), 0);
// Output: microtask, macrotask

// 3. What is a callback function?
// A function passed as an argument to another function, to be executed later.
function greet(name, cb) {
  cb("Hello " + name);
}
greet("Alice", console.log);

// 4. What is a Promise?
// An object representing the eventual completion or failure of an async operation.
const p = new Promise((resolve) => setTimeout(() => resolve("done"), 100));
p.then(console.log);

// 5. How does async/await work?
// Syntactic sugar over Promises for writing async code that looks synchronous.
async function foo() {
  const result = await Promise.resolve("async result");
  console.log(result);
}
foo();

// 6. What happens if you await a non-Promise?
// It is converted to a resolved Promise.
async function bar() {
  const x = await 42;
  console.log(x); // 42
}
bar();

// 7. What is the output order?
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2

// 8. How to handle errors in Promises?
Promise.reject("fail").catch(console.error);
// Or with async/await:
async function err() {
  try {
    await Promise.reject("fail");
  } catch (e) {
    console.error(e);
  }
}
err();

// 9. What is callback hell and how to avoid it?
// Nested callbacks make code hard to read. Use Promises or async/await.
// Example of callback hell:
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("callback hell");
    }, 100);
  }, 100);
}, 100);
// Avoid with Promises or async/await.

// 10. What is the difference between process.nextTick and Promise.resolve?
// Both queue microtasks, but nextTick runs before Promises (Node.js specific).
// In browsers, Promise.resolve is the main microtask API.
