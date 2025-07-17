// ====================== Loops for specifically for ARRAYS  ===========================

// --- forEach ---
// Best for arrays. Cannot break/continue. Callback gets (element, index, array)
const arr = ["a", "b", "c"];
arr.forEach((element, idx) => {
  console.log("forEach array:", idx, element);
});
// Not suitable for objects or strings directly

// --- for...of ---
// Works with any iterable: arrays, strings, Map, Set
for (const element of arr) {
  console.log("for...of array:", element);
}

const str = "hi!";
for (const char of str) {
  console.log("for...of string:", char);
}

const map = new Map([
  ["x", 1],
  ["y", 2],
]);
for (const [key, value] of map) {
  console.log("for...of map:", key, value);
}
// for...of does NOT work directly on plain objects

// --- for...in ---
// Best for objects (enumerates keys). Also works on arrays (indexes), but not recommended for arrays.
const obj = { a: 1, b: 2 };
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log("for...in object:", key, obj[key]);
  }
}

// for...in on array (not recommended, iterates indexes as strings)
for (const idx in arr) {
  console.log("for...in array:", idx, arr[idx]);
}

// --- Summary ---
// forEach: arrays (no break/continue, not for objects)
// for...of: arrays, strings, Map, Set (any iterable, not plain objects)
// for...in: objects (keys), can be used on arrays (indexes as strings, not recommended)
