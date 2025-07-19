# Day 7: JavaScript Async, Promises, and API Practice

This folder contains JavaScript practice projects focused on Promises and working with APIs.

---

## 🚦 How `fetch` Works & Its Priority (Microtask)

The `fetch` API is used for making network requests in JavaScript. It returns a **Promise** and its resolution (the `.then()`/`.catch()` handlers) is scheduled as a **microtask**. Microtasks have higher priority than macrotasks (like `setTimeout`).

### Mermaid Diagram: Fetch & Event Loop Priority

```mermaid
graph TD
  A[Call Stack] --> B[fetch() called]
  B --> C[Web APIs]
  C --> D[Promise Pending]
  D -->|Response| E[Promise Resolved]
  E --> F[.then() callback]
  F --> G[Microtask Queue]
  G --> H[Call Stack]
  H --> I[Macrotask Queue]
```

- **Microtasks** (like fetch's `.then()`, Promises) always run before the next macrotask.
- This means fetch results are handled as soon as the call stack is clear, before any `setTimeout` or UI rendering macrotasks.

---

## 1. [Promises in JavaScript](./Promises_in_js/)

Explore how JavaScript Promises work, including their states, usage, and lifecycle. Includes code examples and a Mermaid diagram for visual learning.

- [`Promise.js`](./Promises_in_js/Promise.js): Code examples and explanations about promises.
- [`README.md`](./Promises_in_js/README.md): Detailed notes and a visual flowchart of the promise lifecycle.

---

## 2. [How API Works](./How_Api_works/)

A simple project demonstrating how to fetch and display data from the GitHub API using `XMLHttpRequest`. The UI is styled with CSS for a professional look.

- [`index.htm`](./How_Api_works/index.htm): Open in your browser to see the demo.
- [`script.js`](./How_Api_works/script.js): JavaScript code for fetching and displaying API data.
- [`style.css`](./How_Api_works/style.css): Modern, responsive styles for the API profile card.

---

## How to Run These Projects

1. Open the relevant project folder.
2. Open the `index.htm` file in your web browser.
3. Interact with the page as described above.

---

This folder is part of the Day 7 JavaScript practice series.
