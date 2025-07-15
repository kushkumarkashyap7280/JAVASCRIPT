// JavaScript Strings: Definition, Methods, and Examples

// --- Definition ---
// A string is a sequence of characters used to represent text.
// Strings can be created using single quotes, double quotes, or backticks (template literals).

let str1 = "Hello";
let str2 = "World";
let str3 = `Hello, ${str2}!`;
console.log(str3); // 'Hello, World!'

// --- Properties ---
console.log(str1.length); // 5 (number of characters)

// --- Common String Methods ---

// charAt(index)
console.log(str1.charAt(1)); // 'e'

// indexOf(substring)
console.log(str1.indexOf("l")); // 2 (first occurrence)

// lastIndexOf(substring)
console.log(str1.lastIndexOf("l")); // 3

// slice(start, end)
console.log(str1.slice(1, 4)); // 'ell'

// substring(start, end)
console.log(str1.substring(1, 4)); // 'ell'

// substr(start, length) [deprecated, but still works]
console.log(str1.substr(1, 3)); // 'ell'

// toUpperCase(), toLowerCase()
console.log(str1.toUpperCase()); // 'HELLO'
console.log(str1.toLowerCase()); // 'hello'

// trim(), trimStart(), trimEnd()
let messy = "   spaced   ";
console.log(messy.trim()); // 'spaced'
console.log(messy.trimStart()); // 'spaced   '
console.log(messy.trimEnd()); // '   spaced'

// split(separator)
let csv = "a,b,c";
console.log(csv.split(",")); // ['a', 'b', 'c']

// replace(search, replacement)
console.log(str1.replace("l", "x")); // 'Hexlo' (only first occurrence)
console.log(str1.replaceAll("l", "x")); // 'Hexxo' (all occurrences)

// includes(substring)
console.log(str1.includes("ell")); // true

// startsWith(prefix), endsWith(suffix)
console.log(str1.startsWith("He")); // true
console.log(str1.endsWith("lo")); // true

// concat(...strings)
console.log(str1.concat(" ", str2)); // 'Hello World'

// repeat(count)
console.log(str1.repeat(3)); // 'HelloHelloHello'

// padStart(targetLength, padString), padEnd(targetLength, padString)
console.log(str1.padStart(7, "*")); // '**Hello'
console.log(str1.padEnd(7, "-")); // 'Hello--'

// Accessing characters (like arrays)
console.log(str1[0]); // 'H'

// Template literals (backticks) for interpolation and multiline
let name = "Alice";
let greeting = `Hello, ${name}!
Welcome to JavaScript.`;
console.log(greeting);

// --- Summary ---
// Strings are immutable (methods return new strings)
// Use string methods for searching, modifying, and formatting text
// See MDN for a full list of string methods
