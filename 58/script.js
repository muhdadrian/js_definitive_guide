// If you want to make a new copy of an object or array, you must explicitly copy the properties of the object of the elements of the array.

let a = ['a', 'b', 'c']; // An array we want to copy
let b = []; // A distinct array we'll copy into

// For each index of a[]
for (let i = 0; i < a.length; i++) {
  b[i] = a[i]; // Copy an element of a into b
}

let c = Array.from(b); // In ES6, copy arrays with Array.from()
console.log(c);
