# Promises in JavaScript

This folder contains code and examples demonstrating how **Promises** work in JavaScript. Promises are a modern way to handle asynchronous operations, making code easier to read and maintain compared to callbacks.

---

## What is a Promise?

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

- **Pending:** Initial state, neither fulfilled nor rejected.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

---

## How Promises Work

A promise can be in one of three states:

- **Pending** → **Fulfilled** (resolved)
- **Pending** → **Rejected** (error)

You attach handlers using `.then()` for success and `.catch()` for errors.

### Mermaid Diagram: Promise Lifecycle

```mermaid
graph TD
  A[Promise Created<br/>(Pending)] -->|resolve| B[Fulfilled]
  A -->|reject| C[Rejected]
  B --> D[.then() handler runs]
  C --> E[.catch() handler runs]
```

---

## Example Usage

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulate async work
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Something went wrong.");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Operation successful!
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## Files

- `Promise.js`: Contains code examples and explanations about promises in JavaScript.

---

**Explore the code and comments in `Promise.js` for more details and practical examples!**
