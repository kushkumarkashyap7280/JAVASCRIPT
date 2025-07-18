// =====================
// DOM Selection Methods: ID vs Class vs QuerySelector
// =====================

// 1. Selecting by ID (getElementById)
// Use when you want a single, unique element (IDs should be unique in the document)
const mainTitle = document.getElementById("main-title");

// 2. Selecting by Class (getElementsByClassName)
// Returns an HTMLCollection (array-like) of all elements with the given class
const infoParagraphs = document.getElementsByClassName("info");
const highlightParagraphs = document.getElementsByClassName("highlight");

// 3. Selecting with querySelector/querySelectorAll
// querySelector: returns the first element matching a CSS selector
const firstHighlight = document.querySelector(".highlight");
// querySelectorAll: returns a NodeList of all elements matching a CSS selector
const allHighlights = document.querySelectorAll(".highlight");

// ========== Event Listeners for Demo ========== //

document.getElementById("byIdBtn").addEventListener("click", function () {
  // Highlight the main title by ID
  mainTitle.style.backgroundColor = "yellow";
  mainTitle.textContent = "Selected by ID!";
});

document.getElementById("byClassBtn").addEventListener("click", function () {
  // Highlight all elements with class 'info'
  for (let el of infoParagraphs) {
    el.style.backgroundColor = "lightblue";
    el.textContent = "Selected by Class!";
  }
});

document.getElementById("byQueryBtn").addEventListener("click", function () {
  // Highlight all elements with class 'highlight' using querySelectorAll
  allHighlights.forEach(function (el) {
    el.style.backgroundColor = "lightgreen";
    el.textContent = "Selected by QuerySelector!";
  });
});

// =====================
// Summary of Methods:
// - getElementById('id'): Fastest, returns a single element, use for unique elements.
// - getElementsByClassName('class'): Returns live HTMLCollection, use for multiple elements sharing a class.
// - querySelector('selector'): Returns first match, supports any CSS selector.
// - querySelectorAll('selector'): Returns all matches as a static NodeList, supports any CSS selector.
// =====================

// =====================
// Child Selection Methods
// =====================

const parentDemo = document.getElementById("parent-demo");
const firstChildBtn = document.getElementById("firstChildBtn");
const lastChildBtn = document.getElementById("lastChildBtn");
const allChildrenBtn = document.getElementById("allChildrenBtn");

firstChildBtn.addEventListener("click", function () {
  // firstChild may return a text node (like whitespace), so use firstElementChild for elements
  // Reset all children styles first
  Array.from(parentDemo.children).forEach(
    (el) => (el.style.backgroundColor = "")
  );
  const firstElem = parentDemo.firstElementChild;
  if (firstElem) {
    firstElem.style.backgroundColor = "orange";
    firstElem.textContent = "First Element Child!";
  }
});

lastChildBtn.addEventListener("click", function () {
  Array.from(parentDemo.children).forEach(
    (el) => (el.style.backgroundColor = "")
  );
  const lastElem = parentDemo.lastElementChild;
  if (lastElem) {
    lastElem.style.backgroundColor = "red";
    lastElem.textContent = "Last Element Child!";
  }
});

allChildrenBtn.addEventListener("click", function () {
  // children returns an HTMLCollection of all element children
  Array.from(parentDemo.children).forEach((el, idx) => {
    el.style.backgroundColor = "lightgray";
    el.textContent = `Child ${idx + 1} (Element)`;
  });
});

// Note: childNodes includes text nodes (like whitespace), while children only includes element nodes.
// firstChild/lastChild may return text nodes; firstElementChild/lastElementChild always return elements.
// =====================

// =====================
// innerText vs innerHTML vs textContent Demo
// =====================

const demoInner = document.getElementById("demo-inner");
const outputInner = document.getElementById("output-inner");

document.getElementById("showInnerText").addEventListener("click", function () {
  // innerText: Only visible text, respects CSS (e.g., display:none)
  outputInner.textContent = "innerText: " + demoInner.innerText;
});

document.getElementById("showInnerHTML").addEventListener("click", function () {
  // innerHTML: Returns the HTML markup inside the element
  outputInner.textContent = "innerHTML: " + demoInner.innerHTML;
});

document
  .getElementById("showTextContent")
  .addEventListener("click", function () {
    // textContent: All text, including hidden, ignores HTML tags
    outputInner.textContent = "textContent: " + demoInner.textContent;
  });

// =====================
// Summary:
// - innerText: Only visible text, respects styling and line breaks.
// - innerHTML: Returns/sets HTML markup (tags included).
// - textContent: All text, including hidden, no tags.
// =====================

// =====================
// NodeList & HTMLCollection to Array Demo
// =====================

const outputArray = document.getElementById("output-array");

document.getElementById("showNodeList").addEventListener("click", function () {
  // querySelectorAll returns a NodeList
  const nodeList = document.querySelectorAll(".arr-item");
  // nodeList.map is undefined! (NodeList is not a real array)
  // Correct way: convert to array
  const arr = Array.from(nodeList);
  // Now you can use array methods like map
  const upper = arr.map((el) => el.textContent.toLowerCase());
  outputArray.textContent = "NodeList as array: [" + upper.join(", ") + "]";
});

document
  .getElementById("showHTMLCollection")
  .addEventListener("click", function () {
    // getElementsByClassName returns an HTMLCollection
    const htmlCollection = document.getElementsByClassName("arr-item");
    // htmlCollection.map is undefined! (HTMLCollection is not a real array)
    // Correct way: convert to array
    const arr = Array.from(htmlCollection);
    // Now you can use array methods like reverse
    const reversed = arr.reverse().map((el) => el.textContent);
    outputArray.textContent =
      "HTMLCollection as array (reversed): [" + reversed.join(", ") + "]";
  });

// Best way: Array.from(collection) or [...collection] (spread syntax)
// This allows you to use all array methods on the result.
// =====================
