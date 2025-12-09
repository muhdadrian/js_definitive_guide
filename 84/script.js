// Destructuring assignment becomes even more complicated when it is used with nested objects, or arrays of objects, or objects of arrays, but it is legal:

let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
]; // An array of two point objects
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points; // destructured into 4 variables.
x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4; // => true
