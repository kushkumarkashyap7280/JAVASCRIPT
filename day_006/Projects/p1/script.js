// Select elements by id (need # for querySelector)
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");

let alertTimeoutId = null;
let timerIntervalId = null;
let timerCount = 0;

// Start a setTimeout to show alert after 10 seconds
b1.addEventListener("click", () => {
  if (alertTimeoutId !== null) return; // Prevent multiple timers
  output1.textContent = "Alert will open in 10 seconds...";
  alertTimeoutId = setTimeout(() => {
    alert("Alert opened!");
    output1.textContent = "";
    alertTimeoutId = null;
  }, 10000);
});

// Stop the alert timeout if not needed
b2.addEventListener("click", () => {
  if (alertTimeoutId !== null) {
    clearTimeout(alertTimeoutId);
    output1.textContent = "Alert cancelled.";
    alertTimeoutId = null;
  }
});

// Start a timer using setInterval
b3.addEventListener("click", () => {
  if (timerIntervalId !== null) return; // Prevent multiple intervals
  timerCount = 0;
  output2.textContent = timerCount;
  timerIntervalId = setInterval(() => {
    timerCount++;
    output2.textContent = timerCount;
  }, 1000);
});

// Stop the timer
b4.addEventListener("click", () => {
  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    output2.textContent = "Timer stopped.";
  }
});

// Note: Make sure your HTML uses <button> not <buttton> for the buttons!
