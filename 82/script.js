// Destructuring assignment can also be performed when the righthand side is an object value. In this case, the lefthand side of the assignment looks something like an object literal: a comma-separated list of variable names within curly braces:

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; // A RGBA color
let { r, g, b } = transparent; // r == 0.0; g == 0.0; b == 0.0

// console.log(r, g, b);
// console.log(transparent);
