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
  A[Promise Created] -->|resolve| B[Fulfilled]
  A -->|reject| C[Rejected]
  B --> D[.then() runs]
  C --> E[.catch() runs]
```

---

## Example Usage

```

```
