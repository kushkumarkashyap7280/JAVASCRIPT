// ============================== LOOPS =========================

// for loop
console.log("--- for loop ---");
for (let i = 0; i < 5; i++) {
  console.log("i:", i);
}
// Use for loop when you know how many times to repeat

// nested loop
console.log("--- nested loop ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// Use nested loops for grids, matrices, or combinations

// break
console.log("--- break example ---");
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // stops at 2
}
// break exits the loop immediately

// continue
console.log("--- continue example ---");
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // skips 2
}
// continue skips to the next iteration

// while loop
console.log("--- while loop ---");
let count = 0;
while (count < 3) {
  console.log("count:", count);
  count++;
}
// Use while when you don't know how many times in advance

// do...while loop
console.log("--- do...while loop ---");
let num = 0;
do {
  console.log("num:", num);
  num++;
} while (num < 2);
// do...while always runs at least once

// forEach loop
console.log("--- forEach loop ---");
const arr = ["a", "b", "c"];
arr.forEach((element, idx) => {
  console.log(idx, element);
});
// forEach is best for arrays, no break/continue

// when to use which loop
// - for: when you know how many times to loop (counted loops)
// - while: when you loop until a condition (uncounted loops)
// - do...while: when you need to run at least once
// - forEach: for array iteration, functional style
// - break: to exit early
// - continue: to skip an iteration

// confusion and thinking to remember
// - forEach can't use break/continue
// - while can create infinite loops if not careful
// - for is most flexible, but forEach is more readable for arrays
