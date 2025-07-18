# Day 4: JavaScript DOM Basics & Selection Methods

---

## 📂 Quick Access: JavaScript Example Folders

- [HOW_DOM_WORKS](./HOW_DOM_WORKS/) — Basic DOM concepts, structure, and manipulation
- [selct_by_id_and_class](./selct_by_id_and_class/) — Selecting elements by ID, class, querySelector, child selection, text/HTML properties, and more
- [create_new_element](./create_new_element/) — Creating and appending new DOM elements, parent/child navigation

---

Welcome to Day 4! This day is all about understanding and practicing the Document Object Model (DOM) in JavaScript. You'll find hands-on demos and clear explanations for each concept.

➡️ **[Open the Day 4 Folder](../day_004/)**

---

# HOW_DOM_WORKS: DOM Structure & Manipulation

**Files:** [index.htm](./HOW_DOM_WORKS/index.htm), [script.js](./HOW_DOM_WORKS/script.js)

- Explains the relationship between the window object, DOM, body, and child elements
- Demonstrates selecting elements, changing styles and content, handling events, and creating/removing elements
- All code is clearly commented for learning

## Key Concepts

- **window object**: The global object in the browser, gives access to the DOM
- **DOM (Document Object Model)**: Tree-like structure representing all elements on the page
- **Selecting elements**: Using `getElementById`, etc.
- **Modifying content/styles**: Changing text, color, background, etc.
- **Event handling**: Responding to user actions (e.g., button clicks)
- **Creating/removing elements**: Dynamically updating the page

**Try it:** Open `index.htm` in your browser and interact with the page to see DOM manipulation in action.

---

# selct_by_id_and_class: DOM Selection & Properties

**Files:** [index.html](./selct_by_id_and_class/index.html), [script.js](./selct_by_id_and_class/script.js)

- Demonstrates all major ways to select elements:
  - By ID (`getElementById`)
  - By class (`getElementsByClassName`)
  - By CSS selector (`querySelector`, `querySelectorAll`)
  - Child selection (`firstElementChild`, `lastElementChild`, `children`, etc.)
- Explains and demonstrates:
  - The difference between `innerText`, `innerHTML`, and `textContent`
  - Why and how to convert NodeList/HTMLCollection to arrays (using `Array.from`)
- Interactive buttons let you see the effect of each method directly
- All code is well-commented for clarity

## Key Concepts & Demos

- **ID vs Class vs QuerySelector**: When and how to use each selection method
- **Child selection**: Accessing first/last/all children of an element
- **Text/HTML properties**: Understanding `innerText`, `innerHTML`, `textContent`
- **NodeList/HTMLCollection to Array**: Why conversion is needed and the best way to do it
  - **Important:** NodeList (from querySelectorAll) only has forEach (not map/filter), and HTMLCollection (from getElementsByClassName) has neither. To use array methods like map/filter, always convert to an array (using Array.from or [...collection]).

**Try it:** Open `index.html` and use the buttons to see how each selection and property works in real time.

---

# create_new_element: Creating & Appending DOM Elements

**Files:** [index.htm](./create_new_element/index.htm), [script.js](./create_new_element/script.js)

- Demonstrates:
  - Navigating from parent to child and vice versa (using `children`, `childNodes`, `parentElement`, `nextElementSibling`)
  - Iterating and updating child elements
  - Creating new elements with `document.createElement`
  - Setting attributes and styles on new elements
  - Adding text nodes with `createTextNode` and `appendChild` (preferred over `innerText` for new nodes)
  - Appending new elements to the DOM (e.g., `document.body.appendChild`)
- All code is well-commented for learning

**Best Practices:**

- Use `createTextNode` to safely add text to new elements (avoids HTML injection, works for all node types)
- Use `classList.add("className")` to add classes, rather than overwriting `classList`

**Try it:** Open `index.htm` in your browser to see parent/child navigation and dynamic element creation in action.

---

## Summary Table

| Concept                | Method/Property                         | Use Case / Notes                             |
| ---------------------- | --------------------------------------- | -------------------------------------------- |
| Select by ID           | `getElementById('id')`                  | Unique, single element                       |
| Select by class        | `getElementsByClassName('c')`           | Multiple elements sharing a class            |
| Select by CSS selector | `querySelector`, `querySelectorAll`     | Flexible, supports any CSS selector          |
| First/last child       | `firstElementChild`, `lastElementChild` | Only element nodes                           |
| All children           | `children`                              | HTMLCollection of element children           |
| All child nodes        | `childNodes`                            | Includes text, comments, and elements        |
| Visible text           | `innerText`                             | Only visible text, respects CSS              |
| All text               | `textContent`                           | All text, including hidden, no tags          |
| HTML markup            | `innerHTML`                             | HTML markup (tags included)                  |
| Convert to array       | `Array.from(collection)`                | Use array methods on NodeList/HTMLCollection |
| NodeList methods       | `forEach` only                          | No map/filter; convert to array for those    |
| HTMLCollection methods | None                                    | No forEach/map/filter; convert to array      |

---

## Best Practices

- Use IDs for unique elements, classes for groups
- Prefer `querySelector`/`

---

# edit_and_remove_element: Editing & Removing List Items

**Files:** [index.htm](./edit_and_remove_element/index.htm), [script.js](./edit_and_remove_element/script.js)

- Demonstrates how to dynamically add, edit, and remove list items (`<li>`) in the DOM
- Each language in the array is added as a list item with "Edit" and "Delete" buttons
- **Edit button:** Prompts the user to change the language name in place
- **Delete button:** Removes the corresponding list item from the DOM
- Shows how to:
  - Create elements and buttons dynamically
  - Attach event handlers for editing and deleting
  - Use `appendChild`, `removeChild`, and `createTextNode`
  - Work with parent/child relationships in the DOM

**Try it:** Open `index.htm` in your browser. You will see a list of programming languages, each with Edit and Delete buttons. Try editing or removing items to see DOM updates in real time.
