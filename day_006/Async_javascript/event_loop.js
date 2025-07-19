// Macrotasks in JavaScript: setTimeout and setInterval
// These are scheduled by the browser and handled by the event loop as macrotasks.

// setTimeout: schedules a function to run once after a delay (in ms)
const timeoutId = setTimeout(() => {
  console.log("This runs after 1000ms (1 second)");
}, 1000);

// To stop/cancel a setTimeout before it runs:
clearTimeout(timeoutId); // The callback above will NOT run if this is called first

// setInterval: schedules a function to run repeatedly every delay ms
const intervalId = setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// To stop/cancel a setInterval:
// After 5 seconds, stop the interval
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);

// Note:
// - setTimeout and setInterval are both macrotasks (they go in the macrotask queue)
// - The event loop checks the call stack, then microtasks, then macrotasks
// - setTimeout with 0ms delay still waits for the current script and all microtasks to finish

// The event loop is the mechanism that manages the call stack and the task queues (microtask and macrotask)
// It is NOT the same as setTimeout/setInterval, but these functions rely on the event loop to execute their callbacks
