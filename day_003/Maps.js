// ============================== MAPS in JavaScript =========================

// What is a Map?
// Map is a built-in object that allows you to store key-value pairs.
// Keys can be of any type (objects, functions, primitives).

// --- Statically initialized Map ---
const staticMap = new Map([
  ["brand", "Toyota"],
  ["model", "Corolla"],
  [2024, "Year as key"],
  [{ id: 1 }, "Object as key"],
]);
console.log("Static Map:", staticMap);

// Accessing static map values
console.log(staticMap.get("brand")); // Toyota
console.log(staticMap.get(2024)); // Year as key

// Creating a Map dynamically
const map = new Map();

// set(key, value): Adds or updates an entry
map.set("name", "Alice");
map.set("age", 25);
map.set(1, "one");
const objKey = { id: 1 };
map.set(objKey, "Object as key");
console.log(map);

// get(key): Retrieves the value for a key
console.log(map.get("name")); // Alice
console.log(map.get(objKey)); // Object as key

// has(key): Checks if a key exists
console.log(map.has("age")); // true
console.log(map.has("random")); // false

// delete(key): Removes an entry by key
map.delete("age");
console.log(map.has("age")); // false

// size: Property for number of entries
console.log(map.size); // 3

// clear(): Removes all entries
// map.clear();
// console.log(map.size); // 0

// Iterating over a Map
map.set("country", "India");
console.log("--- keys ---");
for (let key of map.keys()) {
  console.log(key);
}

console.log("--- values ---");
for (let value of map.values()) {
  console.log(value);
}

console.log("--- entries ---");
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// forEach method
map.forEach((value, key) => {
  console.log("forEach:", key, value);
});

// Map can use any type as key
const funcKey = function () {};
map.set(funcKey, "Function as key");
console.log(map.get(funcKey));

// Chaining set()
map.set("x", 1).set("y", 2);
console.log(map.get("x"), map.get("y"));

// --- When to use Map ---
// - When you need keys that are not just strings (e.g., objects, functions)
// - When you need to preserve insertion order
// - When you need frequent additions/removals of key-value pairs
// - When you want a reliable size property
// - When you want better performance for large dynamic collections

// --- Common confusions: Map vs Object ---
// - Object keys are always strings or symbols; Map keys can be any type
// - Map remembers insertion order; Object does not guarantee order
// - Map has .size, Object uses Object.keys(obj).length
// - Map is iterable directly; Object is not
// - Map methods: set, get, has, delete, clear, forEach, keys, values, entries
// - Use Object for static, fixed structure (like configs, models)
// - Use Map for dynamic, frequently changing collections

// --- Convert Map to Array ---
const arrFromMap = Array.from(map);
console.log(arrFromMap);

// --- Convert Array to Map ---
const arr = [
  ["a", 1],
  ["b", 2],
];
const mapFromArr = new Map(arr);
console.log(mapFromArr);
