// We saw that variables and constants can be declared as part of JavaScript’s various for loops. It is possible to use variable destructuring in this context as well. Here is a code that loops over the name/value pairs of all properties of an object and uses destructuring assignment to convert those pairs from two-element arrays into individual variables:

let o = { x: 1, y: 2 }; // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); // Prints "x 1" and "y 2"
}
