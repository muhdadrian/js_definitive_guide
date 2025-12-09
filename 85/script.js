// Or, instead of destructuring an array of objects, we could destructure an object of arrays:

let points = { p1: [1, 2], p2: [3, 4] }; // An object with 2 array props
let {
  p1: [x1, y1],
  p2: [x2, y2],
} = points; // destructured into 4 vars
x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4; // => true

// Complex destructuring syntax like this can be hard to write and hard to read, and you may be better off just writing out your assignments explicitly with traditional code like let x1 = points.p1[0];.
