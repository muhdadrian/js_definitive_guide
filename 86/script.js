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
]; // points2 == points
