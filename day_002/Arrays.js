// =================== ARRAYS =================================

// 1. Array Creation
// Using array literal
let arr = [2, 3, 4, "kush", true, 1, 2, 3, 4, 456, 24, 2];
console.log("Array literal:", arr);

// Using Array constructor
let arr1 = new Array(0, 1, 2, 3, 4, 5, 6);
console.log("Array constructor:", arr1);

// 2. Array Methods
let myarr = [1, 3, 1, 4, 6, 4, 6, 7];

// push: Adds an element to the end
myarr.push(4);
console.log("After push:", myarr);

// pop: Removes the last element
myarr.pop();
console.log("After pop:", myarr);

// unshift: Adds an element to the beginning
myarr.unshift(5);
console.log("After unshift:", myarr);

// shift: Removes the first element
myarr.shift();
console.log("After shift:", myarr);

// includes: Checks if an element exists
console.log("Includes 3:", myarr.includes(3));
console.log("Includes 4:", myarr.includes(4));

// indexOf: Finds the index of an element
console.log("Index of 1:", myarr.indexOf(1));

// join: Joins array elements into a string
const a = myarr.join();
console.log("Joined string:", a, "Type:", typeof a);

// slice: Returns a shallow copy of a portion of an array
let b = myarr.slice(2, 4);
console.log("Slice (2,4):", b);

// splice: Adds/removes elements (modifies original array)
let c = myarr.splice(2, 4);
console.log("Splice (2,4):", c);
console.log("Array after splice:", myarr);

// concat: Merges arrays (does not modify original)
let s = ["a", "b"];
let newOne = myarr.concat(s);
console.log("Concat:", newOne);

// Spread operator: Merges arrays (ES6)
let spreadOne = [...myarr, ...s];
console.log("Spread:", spreadOne);

// 3. Nested Arrays and flat
let nestedArr = [
  2,
  3,
  4,
  [2, 4, 5, 43, 2, 54],
  344,
  [34234, [3444, 43324], 4353],
];
console.log("Nested array:", nestedArr);
console.log("Flat (Infinity):", nestedArr.flat(Infinity));

// 4. Array static methods
// Array.isArray: Checks if a value is an array
console.log("Is 'kush' an array?", Array.isArray("kush"));
console.log("Is arr an array?", Array.isArray(arr));

// Array.from: Creates array from iterable
console.log("Array from 'kush':", Array.from("kush"));

// Array.of: Creates array from arguments
let one = 1;
let two = 2;
let three = 3;
console.log("Array.of(one, two, three):", Array.of(one, two, three));
