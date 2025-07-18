// =====================
// The window object is the global object in the browser. It represents the browser window and provides access to the DOM (Document Object Model).
// =====================

// window object
//     ||
// DOM (DOUCUMENT OBJ MODEL);
//     ||
//  BODY 
//    ||
//  FURTHER CHILD TAGS

// The DOM (Document Object Model) is a tree-like structure representing all elements on the page.
// We can use JavaScript to select, modify, add, or remove elements from the DOM.

// 1. Selecting elements
const heading = document.getElementById("heading"); // Selects the <h1> by its ID
const button = document.getElementById("changeBtn"); // Selects the <button> by its ID
const container = document.getElementById("container"); // Selects the <div> for dynamic content

// 2. Modifying element styles
// Let's change the background color of the body
// (document.body is a shortcut for window.document.body)
document.body.style.backgroundColor = "#f0f0f0";

// 3. Changing text/content
heading.textContent = "Welcome to the DOM Demo!"; // Changes the text inside the <h1>

// 4. Handling events
// We'll add a click event to the button to demonstrate dynamic changes
button.addEventListener("click", function () {
  // Change the heading text and color
  heading.textContent = "You clicked the button!";
  heading.style.color = "crimson";

  // 5. Creating and adding new elements
  const newItem = document.createElement("p"); // Create a new <p> element
  newItem.textContent = "This paragraph was added dynamically!";
  newItem.style.fontWeight = "bold";
  container.appendChild(newItem); // Add the new element to the container

  // 6. Removing elements (optional)
  // Uncomment the next line to remove the button after it's clicked
  // button.remove();
});

// =====================
// Summary:
// - We selected elements using getElementById
// - Changed styles and text
// - Responded to user events (click)
// - Created and added new elements dynamically
// - (Optionally) removed elements
// =====================
