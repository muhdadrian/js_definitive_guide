// Objects are different than primitives (undefined, null, booleans, numbers and strings). First, they are mutable--their values can change:

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
console.log(o.x);
o.y = 3; // Mutate it again by adding a new property
console.log(o.y);

let a = [1, 2, 3]; // Arrays are also mutable
console.log(a);
a[0] = 0; // Change the value of an array element
console.log(a);
a[3] = 4; // Add a new array element
console.log(a);
