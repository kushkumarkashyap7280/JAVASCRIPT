// ============================= events handling =====================

// 1st approach
// document.body.querySelector('#img1').onclick = ()=>{
//   alert("you click 1 img");
// }                                                                 // Not preferred for large applications, limited control

// 2nd approach: addEventListener
// Syntax:
/*
addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
- type: event type (e.g., 'click', 'keydown', 'mouseover', etc.)
- listener: callback function
- options: boolean or object (see below)
*/

// Example: Mouse event
const img1 = document.body.querySelector("#img1");
img1.addEventListener(
  "click",
  function (e) {
    // e is the event object
    // Some useful properties:
    console.log("timeStamp:", e.timeStamp); // Time (ms) since page loaded when event was created
    console.log("defaultPrevented:", e.defaultPrevented); // true if preventDefault() was called
    console.log("target:", e.target); // The element that triggered the event
    console.log("toElement:", e.toElement); // The element the pointing device is moving to (for mouseover/out)
    console.log("srcElement:", e.srcElement); // (IE, same as target in modern browsers)
    console.log("currentTarget:", e.currentTarget); // The element the event handler is attached to
    console.log("clientX:", e.clientX, "clientY:", e.clientY); // Mouse position relative to viewport
    alert("clicked on img1");
  },
  false
); // third argument: useCapture (false = bubbling phase, true = capturing phase)

// Other common event types:
// 'mouseover', 'mouseout', 'mousedown', 'mouseup', 'mousemove', 'dblclick', 'contextmenu',
// 'keydown', 'keyup', 'keypress', 'input', 'change', 'submit', 'focus', 'blur', etc.

// Example: Keyboard event
// Listen for keydown on the whole document
// document.addEventListener('keydown', function(e) {
//     console.log('Key pressed:', e.key); // e.g., 'a', 'Enter', etc.
//     console.log('Key code:', e.code); // e.g., 'KeyA', 'Enter', etc.
// });

// Event Propagation: Bubbling and Capturing
// Bubbling: Event starts from the target element and bubbles up to ancestors (default)
// Capturing: Event starts from the root and goes down to the target
// The third argument in addEventListener (or options.capture) controls this

// Example: Demonstrate bubbling and capturing
const ul = document.querySelector("ul");

ul.addEventListener(
  "click",
  function (e) {
    console.log("UL clicked (bubbling)");
  },
  false
); // false = bubbling

ul.addEventListener(
  "click",
  function (e) {
    console.log("UL clicked (capturing)");
  },
  true
); // true = capturing

// To stop event propagation:
// e.stopPropagation(); // Prevents further propagation (bubbling/capturing)
// e.stopImmediatePropagation(); // Prevents other listeners of the same event

// To prevent default action (e.g., following a link):
// e.preventDefault();

// Summary:
// - timeStamp: when event was created
// - defaultPrevented: if preventDefault() was called
// - target: element that triggered event
// - toElement/srcElement: related to mouse events
// - currentTarget: element handler is attached to
// - clientX/clientY: mouse position
// - Keyboard events: keydown, keyup, keypress
// - Third argument: controls capturing/bubbling
// - Event propagation: bubbling (default), capturing (set true)
// - Use comments to explain each concept
