// ====================== Dates =========================

// --- Creating Date Objects ---
let now = new Date(); // Current date and time
console.log("Current date/time:", now);

// Custom date: new Date(year, monthIndex, day, hours, minutes, seconds, ms)
let customDate = new Date(2023, 0, 23, 3, 5, 30, 500); // Jan is 0
console.log("Custom date:", customDate);

// From date string
let fromString = new Date("2022-12-31T23:59:59");
console.log("From string:", fromString);

// --- Formatting Dates ---
console.log("toString():", now.toString()); // Full string
console.log("toDateString():", now.toDateString()); // Date only
console.log("toTimeString():", now.toTimeString()); // Time only
console.log("toISOString():", now.toISOString()); // ISO format
console.log("toJSON():", now.toJSON()); // JSON format
console.log("toLocaleString():", now.toLocaleString()); // Localized
console.log("toLocaleDateString():", now.toLocaleDateString()); // Local date
console.log("toLocaleTimeString():", now.toLocaleTimeString()); // Local time

// Custom locale options
const formatted = now.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log("Custom formatted:", formatted);

// --- Getting Date Components ---
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0=Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("UTC Hours:", now.getUTCHours());

// --- Setting Date Components ---
let setDate = new Date();
setDate.setFullYear(2025);
setDate.setMonth(11); // December
setDate.setDate(25);
setDate.setHours(10);
setDate.setMinutes(30);
setDate.setSeconds(15);
setDate.setMilliseconds(250);
console.log("After setting:", setDate);

// --- Timestamps ---
let timestamp = Date.now(); // Milliseconds since Jan 1, 1970
console.log("Timestamp (ms):", timestamp);
console.log("Seconds since epoch:", Math.floor(timestamp / 1000));

// --- Parsing Dates ---
let parsed = Date.parse("2024-06-10T12:34:56Z");
console.log("Parsed timestamp:", parsed); // ms since epoch
console.log("Parsed date:", new Date(parsed));
