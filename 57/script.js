//Objects are sometimes called reference types to distinguish them from JavaScript's primitive types.

//Object values are references, and we say that objects are compared by reference: two object values are the same if and only if they refer to the same underlying object.

let a = []; // The var a refers to an empty array.

let b = a; // Now b refers to the same array.

b[0] = 1; // Mutate the array referred to by var b.
console.log(b);

a[0]; // 1: the change is also visible through var a.

console.log(a);

console.log(a === b); // true: a and b refer to the same object, so they are equal
