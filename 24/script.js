'use strict';

// JS supports more complex mathematical operations through a set of functions and constants defined as properties of the Math object:

console.log(Math.pow(2, 53)); // => 9007199254740992: 2 to the power 53

console.log(Math.round(0.6)); // => 1: round to the nearest int

console.log(Math.ceil(0.6)); // => 1: round up to an int

console.log(Math.floor(0.6)); // => 0: round down to an int

console.log(Math.abs(-5)); // => 5: absolute value

let x = 5;
let y = 6;
let z = 7;

console.log(Math.max(x, y, z)); // Return the largest argument
console.log(Math.min(x, y, z)); // Return the smallest argument

console.log(Math.random()); // Pseudo-random number x where 0 <= x < 1.0

console.log(Math.PI); // n: circumference of a circle / diameter

console.log(Math.E); // e: The base of the natural logarithm

console.log(Math.sqrt(3)); // => 3**0.5: the square root of 3

console.log(Math.pow(3, 1 / 3)); // => 3**(1/3): the cube root of 3

console.log(Math.sin(0)); // Trigonometry: also Math.cos, Math.atan, etc.

console.log(Math.log(10)); // Natural logarithm of 10

console.log(Math.log(100) / Math.LN10); // Base 10 logarithm of 100

console.log(Math.log(512) / Math.LN2); // Base 2 logarithm of 512

console.log(Math.exp(3)); // Math.E cubed
