// Understanding Complex Destructuring

// If you find yourself working with code that uses complex destructuring assignments, there is a useful regularity that can help you make sense of the complex cases. Think first about a regular (single-value) assignment. After the assignment is done, you can take the variable name from the lefthand side of the assignment and use it as an expression in your code, where it will evaluate to whatever value you assigned it.

// The same thing is true for destructuring assignment. The lefthand side of a destructuring assignment looks like an array literal or an object literal. After the assignment has been done, the lefthand side will actually work as a valid array literal or object literal elsewhere in your code. You can check that you’ve written a destructuring assignment correctly by trying to use the lefthand side on the righthand side of another assignment expression:

// Start with a data structure and a complex destructuring
let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;

// Check your destructuring syntax by flipping the assignment around
let points2 = [
  { x: x1, y: y1 },
  { x: x2, y: y2 },
]; // points2 == points (my opinion: similar in terms of answer but not the 'type maybe')


// Gemini Answer:
/*
The answer is false because of how JavaScript handles object comparison.

When you use the equality operator (== or ===) on objects (including arrays), JavaScript does not look inside them to see if their contents are identical. Instead, it checks for reference equality—meaning it checks if both variables point to the exact same location in memory.

Here is a breakdown of exactly what is happening in your code:

1. Creating the First Array

let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
This creates a brand new array in memory (let's call it Array_A) containing two objects.

2. Destructuring

let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
This extracts the primitive numbers (1, 2, 3, 4) from the objects inside Array_A and assigns them to new variables (x1, y1, etc.).

3. Creating the Second Array

let points2 = [{ x: x1, y: y1 }, { x: x2, y: y2 }];
This creates a completely new and separate array in memory (let's call it Array_B), and populates it with brand new objects using those extracted numbers.

4. The Comparison

console.log(points2 == points); // false

Even though points and points2 look identical and hold the same values, they are stored in different places in your computer's memory. Because Array_A is not the exact same instance as Array_B, JavaScript evaluates the comparison as false.

How to make it evaluate to true?
If you want to compare if two arrays/objects have the same structural values, you have a couple of options:

Quick & Dirty (JSON Stringification): Convert them to strings and compare the strings.
console.log(JSON.stringify(points2) == JSON.stringify(points)); // true

Reference Copying: If points2 actually pointed to the same memory location, it would be true.
let points2 = points;
console.log(points2 == points); // true
*/
