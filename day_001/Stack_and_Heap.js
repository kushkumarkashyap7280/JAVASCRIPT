// JavaScript: Stack vs Heap Memory

// --- Stack Memory ---
// - Used for static memory allocation
// - Stores primitive values (number, string, boolean, null, undefined, symbol, bigint)
// - Fast access, managed automatically
// - Each variable gets its own space on the stack

let a = 10; // 'a' is stored on the stack
let b = a; // 'b' gets a copy of 'a' (value is copied)
a = 20;
console.log(b); // 10 (b is unaffected by change to a)

// --- Heap Memory ---
// - Used for dynamic memory allocation
// - Stores non-primitive values (objects, arrays, functions)
// - Slower access, managed by garbage collector
// - Variables store references (pointers) to heap objects

let obj1 = { name: "Alice" }; // object is stored on the heap, obj1 holds a reference
let obj2 = obj1; // obj2 copies the reference, not the object itself
obj1.name = "Bob";
console.log(obj2.name); // 'Bob' (both point to the same object)

let arr1 = [1, 2, 3]; // array is stored on the heap
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (arr1 and arr2 reference the same array)

// --- Summary ---
// Primitives (stack): copied by value
// Non-primitives (heap): copied by reference
// Heap allocation is dynamic and managed by the JavaScript engine
// Stack is for simple, short-lived data; heap is for complex, user-created data
