// Objects are not compared by value: two distinct objects are not equal even if they have the same properties and values. And two distinct arrays are not equal even if they have the same elements in the same order:

let o = { x: 1 },
  p = { x: 1 }; // two objects with the same properties
console.log(o === p); //false: distinct objects are never equal

let a = [],
  b = []; // Two distinct, empty arrays
console.log(a === b); // false: distinct arrays are never equal
